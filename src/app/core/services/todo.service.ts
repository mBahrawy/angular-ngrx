import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoService {

  getTodos(): Observable<Todo[]> {
    return new Observable
  }
  saveTodos(todos: Todo[]): any {
    
  }

  // private storageInitialised = false;

  // constructor(private storage: Storage) {}

  // async getTodos(): Promise<Todo[]> {
  //   if (!this.storageInitialised) await this.storage.create();

  //   return (await this.storage.get('todos')) || [];
  // }

  // async saveTodos(todos: Todo[]) {
  //   if (!this.storageInitialised) await this.storage.create();

  //   return this.storage.set('todos', todos);
  // }
}
