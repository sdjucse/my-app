import { Controller, Get, Post, Req,Delete,Patch } from "@nestjs/common";
import { Request } from "express";
import { Param } from "@nestjs/common";

@Controller('/user')
export class AppController{
    @Get()
    getUsers(){
        return {name:'Sarthak',email:'sarthak.dubey1208@gmail.com'};
    }
    @Post()
    store(@Req() req: Request){
        return req.body;
    }
    @Patch('/:userId')
        update(@Req() req: Request){
            return req.body;
        }
    @Get('/:userId')
        getUser(@Param() params:{userId: number}){
            return params;
        }
    @Delete('/:userId')
        deleteUser(@Param() params:{userId: number}){
            return params;
        }
}