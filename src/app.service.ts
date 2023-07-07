import { Injectable } from '@nestjs/common';
import { Hello } from './hello/hello.entity';

@Injectable()
export class AppService {
  helloworld(): string {
    const hello = new Hello();
    return hello.helloworld();
  }

  hello(name): string {
    const hello = new Hello();
    return hello.hello(name);
  }
}
