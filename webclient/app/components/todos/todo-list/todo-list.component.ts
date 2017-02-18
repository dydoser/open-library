import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core'
import {BookItem} from "../book-item/book-item.component";
import {ReaderForm} from "../../../shared/reader_form.model";
import {BookAddComponent} from "./book-add/book-add.component";

declare var openBooksSearch: any;
import './openBooksSearch.js'

@Component({
    selector: 'todo-list',
    templateUrl: './app/components/todos/todo-list/todo-list.component.html',
    styleUrls: ['./app/components/todos/todo-list/todo-list.component.css'],
    directives: [BookItem, BookAddComponent]
})

export class TodoListComponent {
    @Input() books: ReaderForm[];
    @Output() created: EventEmitter<ReaderForm>;
    @Output() refresh: EventEmitter<number>;
    @Output() changed: EventEmitter<ReaderForm>;
    @Output() deleted: EventEmitter<ReaderForm>;
    @Output() currBookChanged: EventEmitter<ReaderForm>;
    @Output() borrowedPressedEv: EventEmitter<ReaderForm>;
    displayAddForm: boolean;

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }


    constructor() {
        this.displayAddForm = false;
        this.created = new EventEmitter<ReaderForm>();
        this.changed = new EventEmitter<ReaderForm>();
        this.deleted = new EventEmitter<ReaderForm>();
        this.currBookChanged = new EventEmitter<ReaderForm>();
        this.borrowedPressedEv = new EventEmitter<ReaderForm>();
        this.refresh = new EventEmitter<number>();
    }

    get sortedTodos(): ReaderForm[] {
        var todosDump: ReaderForm[] = this.books.map((todo) => todo);
        return todosDump
            .sort((a, b) => {
                if(a.fname > b.fname) return 1;
                else if (a.fname < b.fname) return -1;
                else return 0;
            });
    }

    onBookDeleted(book: ReaderForm): void {
        this.deleted.emit(book);
    }

    onBookChanged(book: ReaderForm): void {
        alert("changed!");
        this.changed.emit(book);
    }

    openAddMenu() {
        this.displayAddForm = true;
    }

    onBookAdded(book: ReaderForm) {
        this.created.emit(book);
        this.displayAddForm = false;
    }

    onCancel() {
        console.log("cancel");
        this.displayAddForm = false;
    }

    search() {
        openBooksSearch();
    }
    refreshClick() {
        this.refresh.emit(1);
    }
}