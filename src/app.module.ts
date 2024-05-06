import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserModule
} from './users/user.module';
import {
  AuthModule
} from './auth/auth.module';

import { FollowModule } from './follow/follow.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/auth'),
    UserModule,
    PostModule,
    AuthModule,
    FollowModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
