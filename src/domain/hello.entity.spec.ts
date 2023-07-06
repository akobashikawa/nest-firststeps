import { HelloEntity } from './hello.entity';

describe('HelloEntity', () => {
  describe('helloworld', () => {
    const hello: HelloEntity = new HelloEntity();
    it('should return "Hello World!"', () => {
      expect(hello.helloworld()).toBe('Hello World!');
    });
  });
});
