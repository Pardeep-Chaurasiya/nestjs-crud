import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.models';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://excellence-pardeep:excellence-pardeep@cluster0.mfk2efk.mongodb.net/nest_crud'),
  MongooseModule.forFeature([{name:'user',schema:UserSchema}])
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
