import { Controller, Get, Param, Patch, Post, Req,Delete} from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private userService:UserService){};
    @Get('/:userId')
    getUsers(){
        this.userService.get();
        //return {name:'Sarthak',email:'sarthak.dubey1208@gmail.com'};
    }
    @Post()
    store(@Req() req: Request){
        return this.userService.create(req);
    }
    @Patch('/:userId')
        update(@Req() req: Request,@Param() param:{userId : number}){
            return this.userService.update(req,param);
        }
    @Delete('/:userId')
        deleteUser(@Param() params:{userId: number}){
            return params;
        }
}