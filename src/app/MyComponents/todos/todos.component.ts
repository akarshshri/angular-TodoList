import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem : string;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todo");
    if(this.localItem == null){
      //console.log(this.localItem)
      this.todos = []
    }else{
      this.todos = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todo",JSON.stringify(this.todos));
    //console.log(todo);
  }
  AddTodo(todo:Todo){
    //const index = this.todos.indexOf(todo);
    this.todos.push(todo);
    //console.log(todo);
    localStorage.setItem("todo",JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    //this.todos.push(todo);
    //console.log(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todo",JSON.stringify(this.todos));
  }


}
