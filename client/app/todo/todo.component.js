"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var todo_service_1 = require("../services/todo.service");
var TodoComponent = (function () {
    function TodoComponent(todoService) {
        var _this = this;
        this.todoService = todoService;
        this.todoService.getTodos()
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    }
    TodoComponent.prototype.addTodo = function (event) {
        var _this = this;
        event.preventDefault();
        var newTodo = {
            title: this.title,
            isReady: false
        };
        this.todoService.addTodo(newTodo)
            .subscribe(function (todo) {
            _this.todos.push(todo);
            _this.title = '';
        });
    };
    TodoComponent.prototype.deleteTodo = function (id) {
        var todos = this.todos;
        this.todoService.deleteTodo(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < todos.length; i++) {
                    if (todos[i]._id == id) {
                        todos.splice(i, 1);
                    }
                }
            }
        });
    };
    TodoComponent.prototype.updateStatus = function (todo) {
        var updatedTodo = {
            _id: todo._id,
            title: todo.title,
            isReady: !todo.isReady
        };
        this.todoService.updateStatus(updatedTodo).subscribe(function (data) {
            todo.isReady = !todo.isReady;
        });
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo-list',
        templateUrl: 'todo.component.html'
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoComponent);
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map