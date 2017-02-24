import { Component, Input, Output, EventEmitter } from '@angular/core'
import {ReaderForm, CheckReaderForm} from "../../../shared/reader_form.model";

@Component({
    selector: 'search-form',
    templateUrl: './app/components/todos/books-search/books-search.component.html',
    styleUrls: ['./app/components/todos/books-search/books-search.component.css']
})

export class BookSearch {
    book: ReaderForm = new ReaderForm();
    checkBook = new CheckReaderForm();
    @Output() filterBooks = new EventEmitter();

    searchClick() {
        var searchQuery: any = {};
        if(this.checkBook._id)
            searchQuery._id = this.book._id;
        if(this.checkBook.fname)
            searchQuery.fname = this.book.fname;
        if(this.checkBook.lname)
            searchQuery.lname = this.book.lname;
        if(this.checkBook.mname)
            searchQuery.mname = this.book.mname;
        if(this.checkBook.birdthyear)
            searchQuery.birdthyear = this.book.birdthyear;
        if(this.checkBook.nationality)
            searchQuery.nationality = this.book.nationality;
        if(this.checkBook.education)
            searchQuery.education = this.book.education;

        if(this.checkBook.profession)
            searchQuery.profession = this.book.profession;
        if(this.checkBook.institution)
            searchQuery.institution = this.book.institution;
        if(this.checkBook.address)
            searchQuery.address = this.book.address;
        if(this.checkBook.phone)
            searchQuery.phone = this.book.phone;
        if(this.checkBook.passport)
            searchQuery.passport = this.book.passport;
        if(this.checkBook.reader_since)
            searchQuery.reader_since = this.book.reader_since;
        if(this.checkBook.photo_url)
            searchQuery.photo_url = this.book.photo_url;

        if(this.checkBook.birdthyear)
            searchQuery.birdthyear = Number(this.book.birdthyear);


        this.filterBooks.emit(searchQuery);
    }
    ngAfterViewInit() {
    }
    onBookUpdate() {
    }
}