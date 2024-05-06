// follow.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Follow {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  followerId: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  followingId: MongooseSchema.Types.ObjectId;
}

export type FollowDocument = Follow & Document;
export const FollowSchema = SchemaFactory.createForClass(Follow);
