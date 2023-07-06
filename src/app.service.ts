import { Injectable } from '@nestjs/common';
import { HelloEntity } from './domain/hello.entity';

@Injectable()
export class AppService {
  helloworld(): string {
    const hello = new HelloEntity();
    return hello.helloworld();
  }

  hello(name): string {
    const hello = new HelloEntity();
    return hello.hello(name);
  }
}
