// post.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post, PostSchema } from './post.entity';
import { FollowModule } from '../follow/follow.module'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    FollowModule, 
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
