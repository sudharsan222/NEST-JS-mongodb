import { Injectable } from '@nestjs/common';
import { Cat } from './cats.model'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class CatsService {
  private cats: Cat[] = []

  constructor(@InjectModel('cat') private readonly catModel: Model<Cat>) {}


  async insertCat(name:string,age:number,level:number) {
    const newCat = new this.catModel({
      name, age, level
    })

    const result = await newCat.save();
    console.log(result);
    return result.name;
  }

  async getCats(){
    const res = await this.catModel.find()
    console.log(res)
    return {message : "success"}
  }


}