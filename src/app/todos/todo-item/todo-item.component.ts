import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as reducers from '../+store/todo.reducers';
import { Todo } from '../models/todo.model';
import * as selectors from '../+store/todo.selectors';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo?: Todo;

  chkCompleted!: FormControl;
  txtInput!: FormControl;

  constructor(
    private store: Store<reducers.AppState>
  ) { }

  ngOnInit(): void {

    this.chkCompleted = new FormControl( this.todo?.complete );
    this.txtInput = new FormControl( this.todo?.text, Validators.required );

  }

}
