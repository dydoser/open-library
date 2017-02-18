import { Component } from '@angular/core';

import {TodoService} from "./shared/todo.service";
import { HTTP_PROVIDERS } from '@angular/http'
import {TodosComponent} from "./components/todos/todos.component";

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [HTTP_PROVIDERS, TodoService],
    directives: [TodosComponent]
})

export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Angular 2Do';
    }
}