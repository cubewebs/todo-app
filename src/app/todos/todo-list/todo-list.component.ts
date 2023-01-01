import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as reducers from '../+store/todo.reducers';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private store: Store<reducers.AppState>
  ) { }

  ngOnInit(): void {

    this.store.select('todos')
      .subscribe( todos => this.todos = todos );
	  
  }

}
