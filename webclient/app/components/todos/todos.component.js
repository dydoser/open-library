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
var todo_list_component_1 = require("./todo-list/todo-list.component");
var todo_service_1 = require("../../shared/todo.service");
var reader_form_model_1 = require("../../shared/reader_form.model");
var book_item_read_form_component_1 = require("./book-item-read-form/book-item-read-form.component");
var books_search_component_1 = require("./books-search/books-search.component");
var borrowed_form_component_1 = require("./borrowed-form/borrowed-form.component");
var TodosComponent = (function () {
    function TodosComponent(todoService) {
        this.todoService = todoService;
        this.currBook = new reader_form_model_1.ReaderForm();
        this.books = [];
        this.borrowedBooks = [];
    }
    TodosComponent.prototype.loadBooks = function () {
        var _this = this;
        this.todoService.getTodos().then(function (todos) { return _this.books = todos; });
    };
    TodosComponent.prototype.ngOnInit = function () {
        this.loadBooks();
    };
    TodosComponent.prototype.onBorrowedCreated = function (borrowed) {
        var _this = this;
        this.todoService.postBorrowed(borrowed).then(function (res) { borrowed._id = res._id; _this.borrowedBooks.push(borrowed); });
    };
    TodosComponent.prototype.onBookCreated = function (book) {
        var _this = this;
        this.todoService.addTodo(book).then(function (res) { book._id = res._id; _this.addTodo(book); });
    };
    TodosComponent.prototype.onTodoDeleted = function (todo) {
        var _this = this;
        this.todoService.deleteTodo(todo).then(function (todo) { return _this.deleteTodo(todo); });
    };
    TodosComponent.prototype.onBorrowedPressed = function (todo) {
        var _this = this;
        this.todoService.getBorrowed(todo._id).then(function (borrowedBooks) { return _this.borrowedBooks = borrowedBooks; });
    };
    TodosComponent.prototype.onBookUpdate = function (book) {
        this.todoService.saveTodo(book).then(function (book) { });
    };
    TodosComponent.prototype.addTodo = function (todo) {
        this.books.push(todo);
    };
    TodosComponent.prototype.deleteTodo = function (todo) {
        this.books.splice(this.books.indexOf(this.books.find(function (currTodo) { return currTodo._id == todo._id; })), 1);
    };
    TodosComponent.prototype.currBookChanged = function (book) {
        this.currBook = book;
    };
    TodosComponent.prototype.applyFilter = function (filter) {
        var _this = this;
        this.todoService.getFilteredTodos(filter).then(function (todos) { return _this.books = todos; });
    };
    TodosComponent = __decorate([
        core_1.Component({
            selector: 'todos',
            templateUrl: './app/components/todos/todos.component.html',
            styleUrls: ['./app/components/todos/todos.component.css'],
            directives: [todo_list_component_1.TodoListComponent, book_item_read_form_component_1.BookItemReadForm, books_search_component_1.BookSearch, borrowed_form_component_1.BorrowedForm]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map