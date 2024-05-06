
//POST /api/follow/:followerId/:followingId
//DELETE /api/follow/:followerId/:followingId

import { Controller, Post, Delete, Param } from '@nestjs/common';
import { FollowService } from './follow.service';

@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post(':followerId/:followingId')
  async followUser(
    @Param('followerId') followerId: string,
    @Param('followingId') followingId: string,
  ) {
    return this.followService.followUser(followerId, followingId);
  }

  @Delete(':followerId/:followingId')
  async unfollowUser(
    @Param('followerId') followerId: string,
    @Param('followingId') followingId: string,
  ) {
    return this.followService.unfollowUser(followerId, followingId);
  }
}
