import { Component, Input, Output, EventEmitter } from '@angular/core'
import {ReaderForm} from "../../../shared/reader_form.model";
import {BorrowedBook} from "../../../shared/borrowed_book_model";

@Component({
    selector: 'borrowed-form',
    templateUrl: './app/components/todos/borrowed-form/borrowed.html'
})

export class BorrowedForm {
    @Input() book: ReaderForm;
    @Input() borrowedBooks: BorrowedBook[];
    @Output() borrowedCreated: EventEmitter<BorrowedBook> = new EventEmitter<BorrowedBook>();
    displayAddForm: boolean = false;

    borrowedBook: BorrowedBook = new BorrowedBook();
    onCancel() {
        this.displayAddForm = false;
    }

    ngAfterViewInit() {
    }
    onBookUpdate() {
    }
    openAddMenu() {
        this.displayAddForm = true;
    }
    onBookAdded() {
        
    }
}