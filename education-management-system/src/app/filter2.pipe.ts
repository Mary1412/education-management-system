import { User } from './users/user';
import { Cours } from './courses/cours';

import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'filter2'
})

export class FilterPipe2 implements PipeTransform{
    transform(users: User[],value:string) {
        return users.filter(user =>{
            return String(user.role)?.includes(value)
        })
        
    }
}

