import { Person } from './person.entity';

describe('Person', () => {
  describe('person', () => {
    const person: Person = new Person('Antonio');
    it('should return "Antonio"', () => {
      expect(person.getName()).toBe('Antonio');
    });
  });
});
