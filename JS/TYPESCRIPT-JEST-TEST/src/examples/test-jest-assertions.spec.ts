describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThanOrEqual(10);
    expect(number).toBeNull;
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'John', age: 30 };
    expect(person).toHaveProperty('name');
    expect(person).toHaveProperty('age', 30);
    expect(person).toEqual({ name: 'John', age: 30 });
  });
});
