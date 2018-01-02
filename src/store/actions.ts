//action constants
export const ADD_TODO = '[Todo] add todo';
export const REMOVE_TODO = '[Todo] remove todo';


//action creators
export class AddTodo {
  readonly type = ADD_TODO;

  constructor(private payload: any) {

  }
}

export class RemoveTodo {
  readonly type = REMOVE_TODO;

  constructor(private payload: any) {

  }
}

console.log(new AddTodo({}))
