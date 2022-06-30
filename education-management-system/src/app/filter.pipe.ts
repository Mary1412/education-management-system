import { Cours } from './courses/cours';

import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{
    transform(courses: Cours[],value:string) {
        return courses.filter(cours =>{
            return cours.auth?.toUpperCase().includes(value.toUpperCase())
        })
        
    }
}

