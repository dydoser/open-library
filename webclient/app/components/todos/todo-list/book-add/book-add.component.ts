import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core'
import {ReaderForm} from "../../../../shared/reader_form.model";

@Component({
    selector: 'book-add',
    templateUrl: './app/components/todos/todo-list/book-add/book-add.component.html',
    styleUrls: ['./app/components/todos/todo-list/book-add/book-add.component.css'],
})

export class BookAddComponent {
    currentBook: ReaderForm;
    @Output() cancelPressed: EventEmitter<boolean>;
    @Output() bookAdded: EventEmitter<ReaderForm>;
    ngAfterViewInit() {
    }

    constructor() {
        this.currentBook = new ReaderForm();
        this.bookAdded = new EventEmitter<ReaderForm>();
        this.cancelPressed = new EventEmitter<boolean>()
    }

    onBookAdded() {
        this.bookAdded.emit(this.currentBook);
        this.currentBook = new ReaderForm();
    }

    onCancel() {
        this.currentBook = new ReaderForm();
        this.cancelPressed.emit(true);
    }
}