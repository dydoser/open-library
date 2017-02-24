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
var BookSearch = (function () {
    function BookSearch() {
        this.book = new reader_form_model_1.ReaderForm();
        this.checkBook = new reader_form_model_1.CheckReaderForm();
        this.filterBooks = new core_1.EventEmitter();
    }
    BookSearch.prototype.searchClick = function () {
        var searchQuery = {};
        if (this.checkBook._id)
            searchQuery._id = this.book._id;
        if (this.checkBook.fname)
            searchQuery.fname = this.book.fname;
        if (this.checkBook.lname)
            searchQuery.lname = this.book.lname;
        if (this.checkBook.mname)
            searchQuery.mname = this.book.mname;
        if (this.checkBook.birdthyear)
            searchQuery.birdthyear = this.book.birdthyear;
        if (this.checkBook.nationality)
            searchQuery.nationality = this.book.nationality;
        if (this.checkBook.education)
            searchQuery.education = this.book.education;
        if (this.checkBook.profession)
            searchQuery.profession = this.book.profession;
        if (this.checkBook.institution)
            searchQuery.institution = this.book.institution;
        if (this.checkBook.address)
            searchQuery.address = this.book.address;
        if (this.checkBook.phone)
            searchQuery.phone = this.book.phone;
        if (this.checkBook.passport)
            searchQuery.passport = this.book.passport;
        if (this.checkBook.reader_since)
            searchQuery.reader_since = this.book.reader_since;
        if (this.checkBook.photo_url)
            searchQuery.photo_url = this.book.photo_url;
        if (this.checkBook.birdthyear)
            searchQuery.birdthyear = Number(this.book.birdthyear);
        this.filterBooks.emit(searchQuery);
    };
    BookSearch.prototype.ngAfterViewInit = function () {
    };
    BookSearch.prototype.onBookUpdate = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BookSearch.prototype, "filterBooks", void 0);
    BookSearch = __decorate([
        core_1.Component({
            selector: 'search-form',
            templateUrl: './app/components/todos/books-search/books-search.component.html',
            styleUrls: ['./app/components/todos/books-search/books-search.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BookSearch);
    return BookSearch;
}());
exports.BookSearch = BookSearch;
//# sourceMappingURL=books-search.component.js.map