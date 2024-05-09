// post.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './post.entity';
import { CreatePostDto } from './create-post.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();  
 }

 async findOneByUserId(userId : string): Promise<Post | null>{
    const post = await this.postModel.findOne({userId}).exec();
    if(!post){
        throw new NotFoundException("Post not found");
    }
    return post;
 }


}
