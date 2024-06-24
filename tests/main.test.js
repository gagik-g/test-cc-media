import { describe, test, vi, expect } from "vitest";

const API_URL = 'https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9';
global.fetch = vi.fn()

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}

describe('Get mock products', () => {
  test('makes a GET request to fetch the result', async () => {
    const products = [
      {
        "id": 3,
        "name": "The Physic",
        "ibu": 45,
        "abv": 4.2,
        "description": "The Physic beer...",
        "image_url": "http://mfreitas.sytes.net:8080/images/45.png"
      },
      {
        "id": 4,
        "name": "Anarchism Alchemist",
        "ibu": 42,
        "abv": 2.4,
        "description": "Anarchism Alchemist",
        "image_url": "http://mfreitas.sytes.net:8080/images/46.png"
      },
    ];

    fetch.mockResolvedValue(createFetchResponse(products))

    const response = await fetch(API_URL)
    const data = await response.json();

    expect(fetch).toHaveBeenCalledWith(
      API_URL
    )

    expect(data).toStrictEqual(products)
  })})

describe('Test real: Get list of products', () => {
  let response;
  let products;

  beforeAll(async () => {
    response = await fetch(
      'https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9',
    );
    products = await response.json();
  }, 2000);

  test('Should have array in the body', () => {
    expectTypeOf(products).toBeArray();
  });

  test('The first item of products should be an object', () => {
    expectTypeOf(products[0]).toBeObject();
  });

  test('The ID of first item in array should be number', () => {
    expectTypeOf(products[0].id).toBeNumber();
  });

  test('Checks for keys in obj', () => {
    expect(Object.keys(products[0]).sort()).toEqual([ 'id', 'name', 'ibu', 'abv', 'image_url', 'description'].sort());
  });
});
