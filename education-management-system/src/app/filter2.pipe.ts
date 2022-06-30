import { Cours } from './courses/cours';

import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'filter2'
})

export class FilterPipe2 implements PipeTransform{
    transform(courses: Cours[],value:string) {
        return courses.filter(cours =>{
            return String(cours.id)?.includes(value)
        })
        
    }
}

