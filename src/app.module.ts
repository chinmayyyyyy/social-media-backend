import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserModule
} from './users/user.module';
import { AuthModule} from './auth/auth.module';
import { FollowModule } from './follow/follow.module';
import 'dotenv/config';



@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserModule, 
    PostModule,
    AuthModule,
    FollowModule
  ],  
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
