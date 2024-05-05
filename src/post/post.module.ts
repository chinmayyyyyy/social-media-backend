// post.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post, PostSchema } from './post.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    // Import any additional modules required for posts (e.g., authentication modules)
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
