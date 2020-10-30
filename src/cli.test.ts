import faker from 'faker';
import spongeCLI from './cli';

describe('SpongeCLI tests', () => {
  it('Should proceed with one arguments', () => {
    const callback = () => {
      const input = faker.lorem.words(25);
      return spongeCLI(input);
    };
    expect(callback).not.toThrowError();
  });
});
