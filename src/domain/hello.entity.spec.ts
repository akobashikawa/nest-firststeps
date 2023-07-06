import { HelloEntity } from './hello.entity';

describe('HelloEntity', () => {
  const hello: HelloEntity = new HelloEntity();

  describe('helloworld', () => {
    it('should return "Hello World!"', () => {
      expect(hello.helloworld()).toBe('Hello World!');
    });
  });

  describe('hello', () => {
    it('should return "Hello World!"', () => {
      expect(hello.hello()).toBe('Hello World!');
    });

    it('should return "Hello Antonio!"', () => {
      expect(hello.hello('Antonio')).toBe('Hello Antonio!');
    });
  });
});
