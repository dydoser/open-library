import { Component, Input, Output, EventEmitter } from '@angular/core'
import {ReaderForm} from "../../../shared/reader_form.model";

@Component({
    selector: 'book-item-read-form',
    templateUrl: './app/components/todos/book-item-read-form/book-item-read-form.component.html',
    styleUrls: ['./app/components/todos/book-item-read-form/book-item-read-form.component.css']
})

export class BookItemReadForm {
    @Input() book: ReaderForm;
    @Input() showPressed: boolean;
    @Output() updateBook = new EventEmitter<ReaderForm>();

    ngAfterViewInit() {
    }
    onBookUpdate() {
        this.updateBook.emit(this.book);
    }
}