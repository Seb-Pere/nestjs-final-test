// import { Controller, Delete, Get, Post, Body, Param } from '@nestjs/common';
// import { UserService } from './user.service';
// import { AddUserDto } from './dtos/create-user-dto';

// @Controller()
// export class UserController {
//     constructor(private readonly userService: UserService) {}

//     @Post()
//     addUser(@Body() { email }: AddUserDto) {
//         return this.userService.addUser(email);
//     }

//     @Get(':email')
//     getUser(@Param('email') email: string) {
//         return this.userService.addUser(email);
//     }

//     @Delete()
//     deleteAllUsers() {
//         return this.userService.resetData();
//     }
// }

import { Body, Controller, Delete, Get, HttpCode, Param } from "@nestjs/common";
import { Post } from "@nestjs/common";

import { AddUserDto } from "./dtos/create-user-dto";
import { UserService } from "./user.service";

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("")
    @HttpCode(201)
    async AddUser(@Body() { email }: AddUserDto) {
        return await this.userService.addUser(email);
    }
}