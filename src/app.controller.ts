import { Controller, Get, Post, Param, Res,  HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    console.log("hello...")
    return this.appService.getHello();
  }

  @Get('/dogs')
  getDogs() : string {
    return "get dogs";
  }

  @Post('/cats')
  postCats() : string {
    return "cats posted";
  }
  @Get(':id')
  getParameters(@Param("id") id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
  
}

