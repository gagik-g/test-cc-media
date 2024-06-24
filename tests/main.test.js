import { describe, test, it, expect } from "vitest";

describe('Get list of products', () => {
  let response;
  let body;
  let products;

  beforeAll(async () => {
    response = await fetch(
      'https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9',
    );
    body = await response.json();
    products = body.record;
  }, 2000);

  test('Should have response status 200', () => {
    expect(response.status).toBe(200);
  });

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
