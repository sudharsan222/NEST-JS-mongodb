import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { CatModule } from './cats.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://LoguN:logun@first-cluster.hx4eu.mongodb.net/nestjs-learn?retryWrites=true&w=majority'
    ),CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
