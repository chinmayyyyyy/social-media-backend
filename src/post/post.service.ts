import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import mongoose from 'mongoose';
import { Post } from './post.entity';
import { CreatePostDto } from './create-post.dto';
import { FollowService } from 'src/follow/follow.service'; // Check the correct path
import { ObjectId } from 'mongodb';
import { Types } from 'mongoose';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    private followService: FollowService,
  ) {}

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOneByUserId(userId: string): Promise<Post | null> {
    const post = await this.postModel.findOne({ userId }).exec();
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async findFollowedPosts(userId: string): Promise<Post[]> {
    // Get the list of users being followed by the specified user
    const followedUsers = await this.followService.getFollowing(userId);
    console.log(followedUsers);
    // Extract the IDs of the followed users
    const followedUserIds = followedUsers.map((follow) => follow.followingId.toString());
    followedUserIds.push(userId);
    console.log(followedUserIds);
    
    // Find posts by the followed users
    const posts = await this.postModel.find({ userId: { $in: followedUserIds } }).populate('userId', 'username').exec();
    
    return posts;
}


}
