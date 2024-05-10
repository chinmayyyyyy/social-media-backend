// post.controller.ts

import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './create-post.dto';
import { Post as PostEntity } from './post.entity'; // Rename to avoid conflict with controller decorator

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }
  @Get(':userId')
  findOneByUserId(@Param('userId') userId: string): Promise<PostEntity | null> {
    return this.postService.findOneByUserId(userId);
  }

  @Get('followed/:userId')
  findFollowedPosts(@Param('userId') userId: string): Promise<PostEntity[]> {
    return this.postService.findFollowedPosts(userId);
  }
}
