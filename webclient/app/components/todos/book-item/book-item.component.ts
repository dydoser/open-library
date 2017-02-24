import { Component, Input, Output, EventEmitter } from '@angular/core'
import {ReaderForm} from "../../../shared/reader_form.model";
import {BookItemReadForm} from "../book-item-read-form/book-item-read-form.component";

declare var showForm: any;
declare var showBorrowedForm: any;
import './showForm.js'

@Component({
    selector: '[book-item]',
    templateUrl: './app/components/todos/book-item/book-item.component.html',
    styleUrls: ['./app/components/todos/book-item/book-item.component.css']
})

export class BookItem {
    @Input() book: ReaderForm;
    @Output() deleted = new EventEmitter<ReaderForm>();
    @Output() changeCurrBook = new EventEmitter<ReaderForm>();
    @Output() borrowedPressed = new EventEmitter<ReaderForm>();

    delete() {
        this.deleted.emit(this.book);
    }

    borrowedBooksPressed() {
        this.borrowedPressed.emit(this.book);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 1000);
        showBorrowedForm();
    }

    browsePressed() {
        this.changeCurrBook.emit(this.book);
        showForm();
    }
}