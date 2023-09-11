import { User,UserDocument } from './user.models';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {InjectModel} from "@nestjs/mongoose"

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ){}

  // create user 
  async createUser(user:User):Promise<User>{
    const newUser = new this.userModel(user)
    return newUser.save()
  }

  // read the user collection
  async readUser(){
    return this.userModel.find({})
    .then(data => {return data})
    .catch(err => console.log(err))
  }

  // updating the data
  async updateUser(id,data):Promise<User>{
    return this.userModel.findByIdAndUpdate(id,data,{new:true})
  }

  // delete the data
  async deleteUser(id){
    return this.userModel.findByIdAndDelete(id)
  }
}
