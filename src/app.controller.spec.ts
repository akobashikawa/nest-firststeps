import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.helloworld()).toBe('Hello World!');
    });
  });

  describe('hello', () => {
    it('should return "Hello World!"', () => {
      expect(appController.helloQuery()).toBe('Hello World!');
    });
    it('should return "Hello Antonio!"', () => {
      expect(appController.helloQuery('Antonio')).toBe('Hello Antonio!');
    });

    it('should return "Hello World!"', () => {
      expect(appController.helloParam()).toBe('Hello World!');
    });
    it('should return "Hello Antonio!"', () => {
      expect(appController.helloParam('Antonio')).toBe('Hello Antonio!');
    });

    it('should return "Hello World!"', () => {
      expect(appController.helloBody()).toBe('Hello World!');
    });
    it('should return "Hello Antonio!"', () => {
      const helloDto = { name: 'Antonio' };
      expect(appController.helloBody(helloDto)).toBe('Hello Antonio!');
    });
  });
});
