import { Cours } from './courses/cours';

import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
    transform(courses: Cours[],value:string) {
        return courses.filter(cours =>{
            return cours.name?.toUpperCase().includes(value.toUpperCase())
        })
        
    }
}

