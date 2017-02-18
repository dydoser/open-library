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
    currBook: ReaderForm;
    books: ReaderForm[];

    borrowedBooks: BorrowedBook[];

    constructor (private todoService: TodoService){
        this.currBook = new ReaderForm();
        this.books = [];
        this.borrowedBooks = [];
    }

    onBorrowedCreated(borrowed: BorrowedBook): void {
        this.todoService.postBorrowed(borrowed).then(res =>  { borrowed._id = res._id; this.borrowedBooks.push(borrowed) });
    }

    onBookCreated(book: ReaderForm): void {
        this.todoService.addTodo(book).then(res =>  { book._id = res._id; this.addTodo(book) });
    }

    onTodoDeleted(todo: ReaderForm): void {
        this.todoService.deleteTodo(todo).then(todo => this.deleteTodo(todo))
    }

    onBorrowedPressed(todo: ReaderForm): void {
        this.todoService.getBorrowed(todo._id).then(borrowedBooks => this.borrowedBooks = borrowedBooks)
    }

    onBookUpdate(book: ReaderForm):void {
        this.todoService.saveTodo(book).then(book => {});
    }
    addTodo(todo: ReaderForm): void {
        this.books.push(todo);
    }

    deleteTodo(todo: ReaderForm): void {
        this.books.splice(this.books.indexOf(this.books.find(currTodo => currTodo._id == todo._id)), 1);
    }
    currBookChanged(book: ReaderForm) {
        this.currBook = book;
    }
    applyFilter(filter: any) {
        this.todoService.getFilteredTodos(filter).then(todos => this.books = todos);
    }
}