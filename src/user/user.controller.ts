import { Controller, Delete, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserDto } from './dtos/create-user-dto';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    addUser(@Body() { email }: AddUserDto) {
        return this.userService.addUser(email);
    }

    @Get(':email')
    getUser(@Param('email') email: string) {
        return this.userService.addUser(email);
    }

    @Delete()
    deleteAllUsers() {
        return this.userService.resetData();
    }
}
