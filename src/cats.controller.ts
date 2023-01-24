import { Controller, Get, Post, Res, HttpStatus, Body, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { CatsService } from './cats.service'

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatsService) {}
  @Get()  
  async findAll(): Promise<string[]> {
    return ['naveen','navin'];
  }
  @Get('string')  
  async findAl(): Promise<string> {
    return 'naveen';
  }

  @Post()
  async create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }
  @Post('input')
  async catPost(@Body() body:any, @Res() res) {
      console.log(body)
      return res.status(200).json({message:"success"})
  }

  @Post('add-cat')
  async addCat(@Body() body:any) {
    const catName = await this.catService.insertCat(body.name,body.age,body.level)
    return {name:catName}  
  } 

}