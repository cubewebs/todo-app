import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filterTodos } from '../+filter-store/filter.actions';
import { cleanCompleted } from '../+store/todo.actions';
import { FilterTypes } from '../models/filter.types';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: FilterTypes = 'all';
  filters: FilterTypes[] = ['all', 'active', 'completed'];

  activeCount: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    // this.store.select('filter').subscribe( filter => this.actualFilter = filter );
    this.store.subscribe( state => {

      this.actualFilter = state.filter;
      this.activeCount = state.todos.filter( todo => !todo.complete ).length;

    })

  }

  changeFilter( filter: FilterTypes ) {

    this.store.dispatch(filterTodos({ filter }))

  }

  clearCompleted() {
    this.store.dispatch(cleanCompleted())
  }


}
