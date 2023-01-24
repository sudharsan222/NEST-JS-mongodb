import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service';
import { CatSchema } from './cats.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'cat', schema: CatSchema}])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatModule {}
