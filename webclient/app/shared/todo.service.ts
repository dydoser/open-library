import { Injectable } from '@angular/core'
import {Http, Headers, Request, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import '../app.settings'
import {restApiUrl} from "../app.settings";
import {ReaderForm} from "./reader_form.model";
import {BorrowedBook} from "./borrowed_book_model";
import {Observable} from 'rxjs/Observable'
import 'rxjs/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/map';

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

    deleteBorrowed(borrowed: BorrowedBook): Promise<BorrowedBook> {
        let url = restApiUrl + `borrowed/${borrowed._id}`;
        return this.http.delete(url, { })
            .toPromise()
            .then(res => borrowed)
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

    addTodo(todo: ReaderForm, callback: any) {
        console.log("service:addTodo");
        console.log("service:post");
        let body = JSON.stringify(todo);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( { headers });

        return this.http.post(restApiUrl+"books", body, options)
            .share()
            .map((res: Response) => {
                callback(JSON.parse(res.text()));
            })
            .subscribe(
                (data) => {},
                (err) => {}
            );
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