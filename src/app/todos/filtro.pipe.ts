import { Pipe, PipeTransform } from '@angular/core';
import { FilterTypes } from './models/filter.types';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filter: FilterTypes): Todo[] {

    switch (filter) {

      case 'completed':
        return todos.filter( todo => todo.complete );
    
      case 'active':
        return todos.filter( todo => !todo.complete );
    
      default:
        return todos;
        
    }

  }

}
