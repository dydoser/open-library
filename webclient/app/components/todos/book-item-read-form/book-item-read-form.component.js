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
var BookItemReadForm = (function () {
    function BookItemReadForm() {
        this.updateBook = new core_1.EventEmitter();
    }
    BookItemReadForm.prototype.ngAfterViewInit = function () {
    };
    BookItemReadForm.prototype.onBookUpdate = function () {
        this.updateBook.emit(this.book);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', reader_form_model_1.ReaderForm)
    ], BookItemReadForm.prototype, "book", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BookItemReadForm.prototype, "showPressed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BookItemReadForm.prototype, "updateBook", void 0);
    BookItemReadForm = __decorate([
        core_1.Component({
            selector: 'book-item-read-form',
            templateUrl: './app/components/todos/book-item-read-form/book-item-read-form.component.html',
            styleUrls: ['./app/components/todos/book-item-read-form/book-item-read-form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BookItemReadForm);
    return BookItemReadForm;
}());
exports.BookItemReadForm = BookItemReadForm;
//# sourceMappingURL=book-item-read-form.component.js.map