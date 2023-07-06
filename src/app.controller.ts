import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiQuery, ApiParam, ApiBody } from '@nestjs/swagger';
import { HelloDto } from './hello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  helloworld(): string {
    return this.appService.helloworld();
  }

  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Name',
    example: 'Antonio',
  })
  @Get('/hello')
  helloQuery(@Query('name') name?): string {
    console.log({ name });
    return this.appService.hello(name);
  }

  @ApiParam({
    name: 'name',
    required: false,
    description: 'Name',
    example: 'Antonio',
    allowEmptyValue: true,
  })
  @Get('/hello/:name?')
  helloParam(@Param('name') name?): string {
    console.log({ name });
    return this.appService.hello(name);
  }

  @ApiBody({
    type: HelloDto,
    required: false,
  })
  @Post('/hello')
  helloBody(@Body() helloDto?: HelloDto): string {
    console.log(helloDto);
    const name = helloDto ? helloDto.name : undefined;
    return this.appService.hello(name);
  }
}
