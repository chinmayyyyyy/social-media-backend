import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as cors from 'cors';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, { cors: false });
  
  // Enable CORS
  app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
  }));
  
  
  await app.listen(3000);
}
bootstrap();
