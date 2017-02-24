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
var core_1 = require('@angular/core');
var book_item_component_1 = require("../book-item/book-item.component");
var book_add_component_1 = require("./book-add/book-add.component");
require('./openBooksSearch.js');
var TodoListComponent = (function () {
    function TodoListComponent() {
        this.displayAddForm = false;
        this.created = new core_1.EventEmitter();
        this.changed = new core_1.EventEmitter();
        this.deleted = new core_1.EventEmitter();
        this.currBookChanged = new core_1.EventEmitter();
        this.borrowedPressedEv = new core_1.EventEmitter();
        this.refresh = new core_1.EventEmitter();
    }
    TodoListComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    Object.defineProperty(TodoListComponent.prototype, "sortedTodos", {
        get: function () {
            var todosDump = this.books.map(function (todo) { return todo; });
            return todosDump
                .sort(function (a, b) {
                if (a.fname > b.fname)
                    return 1;
                else if (a.fname < b.fname)
                    return -1;
                else
                    return 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    TodoListComponent.prototype.onBookDeleted = function (book) {
        this.deleted.emit(book);
    };
    TodoListComponent.prototype.onBookChanged = function (book) {
        alert("changed!");
        this.changed.emit(book);
    };
    TodoListComponent.prototype.openAddMenu = function () {
        this.displayAddForm = true;
    };
    TodoListComponent.prototype.onBookAdded = function (book) {
        console.log("todo-list");
        this.created.emit(book);
        this.displayAddForm = false;
    };
    TodoListComponent.prototype.onCancel = function () {
        console.log("cancel");
        this.displayAddForm = false;
    };
    TodoListComponent.prototype.search = function () {
        openBooksSearch();
    };
    TodoListComponent.prototype.refreshClick = function () {
        this.refresh.emit(1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TodoListComponent.prototype, "books", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TodoListComponent.prototype, "created", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TodoListComponent.prototype, "refresh", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TodoListComponent.prototype, "changed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TodoListComponent.prototype, "deleted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TodoListComponent.prototype, "currBookChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TodoListComponent.prototype, "borrowedPressedEv", void 0);
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: './app/components/todos/todo-list/todo-list.component.html',
            styleUrls: ['./app/components/todos/todo-list/todo-list.component.css'],
            directives: [book_item_component_1.BookItem, book_add_component_1.BookAddComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map