import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@todo-app/shared/shared.module';
import { TodoListComponent } from '@todo-app/todo-list/todo-list.component';
import { AddTodoModule } from './add-todo/add-todo.module';
import { TodoListEffects } from './redux-api/todo-list.effects';
import { todoListReducers } from './redux-api/todo-list.reducers';
import { TodoListSelector } from './redux-api/todo-list.selector';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    AddTodoModule,
    StoreModule.forFeature('todoList', todoListReducers),
    EffectsModule.forFeature([TodoListEffects])
  ],
  declarations: [TodoListComponent],
  providers: [TodoListSelector]
})
export class TodoListModule {}
