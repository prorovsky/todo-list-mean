import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../../Todo';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo.component.html'
})
export class TodoComponent {
    todos: Todo[];
    title: string;

    constructor(private todoService: TodoService){
        this.todoService.getTodos()
            .subscribe(todos => {
                this.todos = todos;
            });
    }

    addTodo(event){
        event.preventDefault();
        let newTodo = {
            title: this.title,
            isReady: false
        }

        this.todoService.addTodo(newTodo)
            .subscribe(todo => {
                this.todos.push(todo);
                this.title = '';
            });
    }

    deleteTodo(id){
        let todos = this.todos;

        this.todoService.deleteTodo(id).subscribe(data => {
            if(data.n == 1){
                for(let i = 0; i < todos.length; i++){
                    if(todos[i]._id == id){
                        todos.splice(i, 1);
                    }
                }
            }
        });
    }

    updateStatus(todo){
        let updatedTodo = {
            _id: todo._id,
            title: todo.title,
            isReady: !todo.isReady
        };

        this.todoService.updateStatus(updatedTodo).subscribe(data => {
            todo.isReady = !todo.isReady;
        });
    }

 }