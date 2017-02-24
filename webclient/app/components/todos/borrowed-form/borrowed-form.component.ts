import { Component, Input, Output, EventEmitter } from '@angular/core'
import {ReaderForm} from "../../../shared/reader_form.model";
import {BorrowedBook} from "../../../shared/borrowed_book_model";

@Component({
    selector: 'borrowed-form',
    templateUrl: './app/components/todos/borrowed-form/borrowed.html'
})

export class BorrowedForm {
    @Input() currForm: ReaderForm;
    @Input() borrowedBooks: BorrowedBook[];
    @Output() borrowedCreated: EventEmitter<BorrowedBook> = new EventEmitter<BorrowedBook>();
    @Output() borrowedDeleted: EventEmitter<BorrowedBook> = new EventEmitter<BorrowedBook>();
    displayAddForm: boolean = false;

    borrowedBook: BorrowedBook = new BorrowedBook();
    onCancel() {
        this.displayAddForm = false;
    }

    deleteBook(book: BorrowedBook) {
        this.borrowedDeleted.emit(book);
    }

    ngAfterViewInit() {
        window.dispatchEvent(new Event('resize'));
    }

    onBookUpdate() {
    }

    openAddMenu() {
        window.dispatchEvent(new Event('resize'));
        this.displayAddForm = true;
    }

    onBookAdded() {
        this.borrowedBook.extradition = "Тільки що";
        this.borrowedBook['form_id'] = this.currForm._id;
        this.borrowedCreated.emit(this.borrowedBook);
    }
}