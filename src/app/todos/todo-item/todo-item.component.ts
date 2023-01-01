import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as reducers from '../+store/todo.reducers';
import * as fromActions from '../+store/todo.actions';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('editInput') txtEditInput!: ElementRef;

  chkCompleted!: FormControl;
  txtInput!    : FormControl;

  isEditing: boolean = false;

  constructor(
    private store: Store<reducers.AppState>
  ) { }

  ngOnInit(): void {

    this.chkCompleted = new FormControl( this.todo?.complete );
    this.txtInput     = new FormControl( this.todo?.text, Validators.required );

	this.chkCompleted.valueChanges.subscribe( value => {
		this.store.dispatch(fromActions.checkmarkTodo({ id: this.todo?.id }) );
	})

  }

  edit() {
	this.isEditing = true;
	this.txtInput.setValue( this.todo.text );
	setTimeout(() => {
		this.txtEditInput.nativeElement.select();
	}, 1);
  }

  editDone() {
	this.isEditing = false;

	if(this.txtInput.invalid) { return; }
	if( this.txtInput.value === this.todo.text ) { return; }

	this.store.dispatch(fromActions.editTodo(
		{
			id: this.todo.id,
			text: this.txtInput.value
		}
	))
  }

  deleteTodo() {

	this.store.dispatch(fromActions.deleteTodo(
		{
			id: this.todo.id,
		}
	))

  }

}
