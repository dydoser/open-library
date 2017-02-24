import {Component, OnInit} from "@angular/core";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoService} from "../../shared/todo.service";
import {ReaderForm} from "../../shared/reader_form.model";
import {BookItemReadForm} from "./book-item-read-form/book-item-read-form.component";
import {BookSearch} from "./books-search/books-search.component";
import {BorrowedForm} from "./borrowed-form/borrowed-form.component";
import {BorrowedBook} from "../../shared/borrowed_book_model";


@Component ({
    selector: 'todos',
    templateUrl: './app/components/todos/todos.component.html',
    styleUrls: ['./app/components/todos/todos.component.css'],
    directives: [TodoListComponent, BookItemReadForm, BookSearch, BorrowedForm]
})
export class TodosComponent implements OnInit {
    loadBooks() {
        this.todoService.getTodos().then(todos => this.books = todos);
    }
    ngOnInit(): any {
        this.loadBooks();
    }
    currForm: ReaderForm;
    books: ReaderForm[];

    borrowedBooks: BorrowedBook[];

    constructor (private todoService: TodoService){
        this.currForm = new ReaderForm();
        this.books = [];
        this.borrowedBooks = [];
    }

    onBorrowedDeleted(borrowed: BorrowedBook) {
        this.todoService.deleteBorrowed(borrowed).then(b => {
            this.borrowedBooks.splice(
                this.borrowedBooks.indexOf(
                    this.borrowedBooks.find(
                        currTodo => currTodo._id == borrowed._id)), 1);
        });
    }

    onBorrowedCreated(borrowed: BorrowedBook): void {
        var self = this;
        this.todoService.postBorrowed(borrowed).then(res =>  {
            borrowed._id = res._id;
            this.borrowedBooks.push(borrowed);
            //self.todoService.getBorrowed(self.currForm._id).then(borrowedBooks => this.borrowedBooks = borrowedBooks)
        });
    }

    onBookCreated(book: ReaderForm): void {
        var self = this;
        this.todoService.addTodo(book, function (res: ReaderForm) {
            book._id = res._id;
            self.books.push(book);
        });
    }

    onTodoDeleted(todo: ReaderForm): void {
        this.todoService.deleteTodo(todo).then(todo => this.deleteTodo(todo))
    }

    onBorrowedPressed(form: ReaderForm): void {
        this.currForm = form;
        this.todoService.getBorrowed(form._id).then(borrowedBooks => this.borrowedBooks = borrowedBooks)
    }

    onBookUpdate(book: ReaderForm):void {
        this.todoService.saveTodo(book).then(book => {});
    }

    deleteTodo(todo: ReaderForm): void {
        this.books.splice(this.books.indexOf(this.books.find(currTodo => currTodo._id == todo._id)), 1);
    }
    currBookChanged(book: ReaderForm) {
        this.currForm = book;
    }
    applyFilter(filter: any) {
        this.todoService.getFilteredTodos(filter).then(todos => this.books = todos);
    }
}