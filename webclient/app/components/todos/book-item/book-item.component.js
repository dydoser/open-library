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
var reader_form_model_1 = require("../../../shared/reader_form.model");
require('./showForm.js');
var BookItem = (function () {
    function BookItem() {
        this.deleted = new core_1.EventEmitter();
        this.changeCurrBook = new core_1.EventEmitter();
        this.borrowedPressed = new core_1.EventEmitter();
    }
    BookItem.prototype.delete = function () {
        this.deleted.emit(this.book);
    };
    BookItem.prototype.borrowedBooksPressed = function () {
        this.borrowedPressed.emit(this.book);
        showBorrowedForm();
    };
    BookItem.prototype.browsePressed = function () {
        this.changeCurrBook.emit(this.book);
        showForm();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', reader_form_model_1.ReaderForm)
    ], BookItem.prototype, "book", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BookItem.prototype, "deleted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BookItem.prototype, "changeCurrBook", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BookItem.prototype, "borrowedPressed", void 0);
    BookItem = __decorate([
        core_1.Component({
            selector: '[book-item]',
            templateUrl: './app/components/todos/book-item/book-item.component.html',
            styleUrls: ['./app/components/todos/book-item/book-item.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BookItem);
    return BookItem;
}());
exports.BookItem = BookItem;
//# sourceMappingURL=book-item.component.js.map