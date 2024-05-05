// post.entity.ts

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose'; // Import Types from mongoose
import { User } from 'src/users/user.entity';

@Schema()
export class Post extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true }) // Use Types.ObjectId instead of Schema.Types.ObjectId
  userId: User['_id'];

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
