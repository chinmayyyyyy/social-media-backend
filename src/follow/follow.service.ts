// follow.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Follow, FollowDocument } from './follow.model';

@Injectable()
export class FollowService {
  constructor(
    @InjectModel(Follow.name) private followModel: Model<FollowDocument>,
  ) {}

  async followUser(followerId: string, followingId: string): Promise<Follow> {
    const follow = new this.followModel({ followerId, followingId });
    return follow.save();
  }

  async unfollowUser(followerId: string, followingId: string): Promise<void> {
    await this.followModel.deleteOne({ followerId, followingId });
  }

  async getFollowers(userId: string): Promise<Follow[]> {
    return this.followModel.find({ followingId: userId }).exec();
  }

  async getFollowing(userId: string): Promise<Follow[]> {
    return this.followModel.find({ followerId: userId }).exec();
  }
}
