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
var borrowed_book_model_1 = require("../../../shared/borrowed_book_model");
var BorrowedForm = (function () {
    function BorrowedForm() {
        this.borrowedCreated = new core_1.EventEmitter();
        this.borrowedDeleted = new core_1.EventEmitter();
        this.displayAddForm = false;
        this.borrowedBook = new borrowed_book_model_1.BorrowedBook();
    }
    BorrowedForm.prototype.onCancel = function () {
        this.displayAddForm = false;
    };
    BorrowedForm.prototype.deleteBook = function (book) {
        this.borrowedDeleted.emit(book);
    };
    BorrowedForm.prototype.ngAfterViewInit = function () {
        window.dispatchEvent(new Event('resize'));
    };
    BorrowedForm.prototype.onBookUpdate = function () {
    };
    BorrowedForm.prototype.openAddMenu = function () {
        window.dispatchEvent(new Event('resize'));
        this.displayAddForm = true;
    };
    BorrowedForm.prototype.onBookAdded = function () {
        this.borrowedBook.extradition = "Тільки що";
        this.borrowedBook['form_id'] = this.currForm._id;
        this.borrowedCreated.emit(this.borrowedBook);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', reader_form_model_1.ReaderForm)
    ], BorrowedForm.prototype, "currForm", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BorrowedForm.prototype, "borrowedBooks", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BorrowedForm.prototype, "borrowedCreated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BorrowedForm.prototype, "borrowedDeleted", void 0);
    BorrowedForm = __decorate([
        core_1.Component({
            selector: 'borrowed-form',
            templateUrl: './app/components/todos/borrowed-form/borrowed.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BorrowedForm);
    return BorrowedForm;
}());
exports.BorrowedForm = BorrowedForm;
//# sourceMappingURL=borrowed-form.component.js.map