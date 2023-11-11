import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    get(){
        return {name:'Sarthak Dubey',email:'sarthak.dubey1208@gmail.com'};
    }
   
}
