import { User } from './users/user';
import { Cours } from './courses/cours';

import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'searchUsers'
})

export class SearchUsersPipe implements PipeTransform{
    transform(users: User[],value:string) {
        return users.filter(user =>{
            return user.login?.toUpperCase().includes(value.toUpperCase())
        })
        
    }
}

