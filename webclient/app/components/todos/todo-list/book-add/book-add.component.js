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
var reader_form_model_1 = require("../../../../shared/reader_form.model");
var BookAddComponent = (function () {
    function BookAddComponent() {
        this.currentBook = new reader_form_model_1.ReaderForm();
        this.bookAdded = new core_1.EventEmitter();
        this.cancelPressed = new core_1.EventEmitter();
    }
    BookAddComponent.prototype.ngAfterViewInit = function () {
    };
    BookAddComponent.prototype.onBookAdded = function () {
        console.log("book-add");
        this.bookAdded.emit(this.currentBook);
        this.currentBook = new reader_form_model_1.ReaderForm();
    };
    BookAddComponent.prototype.onCancel = function () {
        this.currentBook = new reader_form_model_1.ReaderForm();
        this.cancelPressed.emit(true);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BookAddComponent.prototype, "cancelPressed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BookAddComponent.prototype, "bookAdded", void 0);
    BookAddComponent = __decorate([
        core_1.Component({
            selector: 'book-add',
            templateUrl: './app/components/todos/todo-list/book-add/book-add.component.html',
            styleUrls: ['./app/components/todos/todo-list/book-add/book-add.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], BookAddComponent);
    return BookAddComponent;
}());
exports.BookAddComponent = BookAddComponent;
//# sourceMappingURL=book-add.component.js.map