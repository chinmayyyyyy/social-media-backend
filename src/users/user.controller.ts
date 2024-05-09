import { Controller, Get, Post, Body, Param, UseGuards, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { log } from 'console';

@Controller('register')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post()
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.registerUser(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('search')
  searchUsers(@Query('query') query: string) {
    return this.userService.searchUsers(query);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get(':username')
  getUserByUsername(@Param('username') username: string) {
    return this.userService.getUserByUsername(username);
  }

}
