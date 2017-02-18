import { Injectable } from '@angular/core'
import {Http, Headers, Request, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import '../app.settings'
import {restApiUrl} from "../app.settings";
import {ReaderForm} from "./reader_form.model";
import {BorrowedBook} from "./borrowed_book_model";

@Injectable()
export class TodoService {
    constructor(private http: Http) { }

    getTodos(): Promise<ReaderForm[]> {
        return this.http.get(restApiUrl + "books")
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);
    }

    getBorrowed(formId: string): Promise<BorrowedBook[]> {
        return this.http.get(restApiUrl + "borrowed?form_id="+formId)
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);
    }

    postBorrowed (borrowed: BorrowedBook) {
        let body = JSON.stringify(borrowed);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers });
        return this.http.post(restApiUrl+"borrowed", body, options)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    getFilteredTodos(filter: any): Promise<ReaderForm[]> {
        let body = JSON.stringify(filter);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers });

        return this.http.post(restApiUrl+"books/filter", body, options)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    addTodo(todo: ReaderForm): Promise<ReaderForm> {
        return this.post(todo);
    }

    deleteTodo(todo: ReaderForm): Promise<ReaderForm> {
        return this.delete(todo);
    }

    saveTodo(todo: ReaderForm): Promise<ReaderForm> {
        return this.put(todo);
    }

    private put(book: ReaderForm) {
        let bodyString = JSON.stringify(book);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers });

        return this.http.put(restApiUrl+"books", bodyString, options)
            .toPromise()
            .then()
            .catch(this.handleError);
    };

    private post(todo: ReaderForm) {
        let body = JSON.stringify(todo);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers });

        return this.http.post(restApiUrl+"books", body, options)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private delete(todo: ReaderForm) : Promise<ReaderForm> {
        let url = restApiUrl + `books/${todo._id}`;
        return this.http.delete(url, { })
            .toPromise()
            .then(res => todo)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.log("Error happened!", error);
        return Promise.reject(error.message || error);
    }
}