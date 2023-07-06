import { Injectable } from '@nestjs/common';
import { HelloEntity } from './domain/hello.entity';

@Injectable()
export class AppService {
  getHello(): string {
    const hello = new HelloEntity();
    return hello.helloworld();
  }
}
