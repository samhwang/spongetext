import { faker } from '@faker-js/faker';
import { describe, expect, it } from 'vitest';
import spongify from './spongify';

describe('Spongify test', () => {
  const input = faker.lorem.sentence(15);
  const output = spongify(input);

  it('should spongify text properly', () => {
    expect(output).toBeDefined();
  });

  it('should generate a string output', () => {
    expect(typeof output).toBe('string');
  });

  it('should have the same length as the input', () => {
    expect(output.length).toEqual(input.length);
  });
});
