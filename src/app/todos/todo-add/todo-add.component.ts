import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import  * as actions from '../+store/todo.actions';
import  * as reducers from '../+store/todo.reducers';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  inputTxt: FormControl;

  constructor(
    private store: Store<reducers.AppState>
  ) {
    this.inputTxt = new FormControl('', Validators.required)
  }

  ngOnInit(): void {
  }

  addTodo() {
    if( this.inputTxt.invalid ) { return; }
    this.store.dispatch(actions.createTodo({ text: this.inputTxt.value }));
    this.inputTxt.reset();
  }

}
