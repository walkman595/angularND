import { Component, OnInit } from '@angular/core';
import { Todo } from './../Models/Todo';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  todos:Todo[];

inputTodo:string = "";


  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: true
      }
    ]
  }

  toggleDone (id:number):void {
    this.todos.map((v,i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id:number):void {
    this.todos = this.todos.filter((v, i ) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }



}
