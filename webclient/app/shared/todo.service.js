"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
require('../app.settings');
var app_settings_1 = require("../app.settings");
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get(app_settings_1.restApiUrl + "books")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.getBorrowed = function (formId) {
        return this.http.get(app_settings_1.restApiUrl + "borrowed?form_id=" + formId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.postBorrowed = function (borrowed) {
        var body = JSON.stringify(borrowed);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(app_settings_1.restApiUrl + "borrowed", body, options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.getFilteredTodos = function (filter) {
        var body = JSON.stringify(filter);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(app_settings_1.restApiUrl + "books/filter", body, options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.addTodo = function (todo) {
        return this.post(todo);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        return this.delete(todo);
    };
    TodoService.prototype.saveTodo = function (todo) {
        return this.put(todo);
    };
    TodoService.prototype.put = function (book) {
        var bodyString = JSON.stringify(book);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(app_settings_1.restApiUrl + "books", bodyString, options)
            .toPromise()
            .then()
            .catch(this.handleError);
    };
    ;
    TodoService.prototype.post = function (todo) {
        var body = JSON.stringify(todo);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(app_settings_1.restApiUrl + "books", body, options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.delete = function (todo) {
        var url = app_settings_1.restApiUrl + ("books/" + todo._id);
        return this.http.delete(url, {})
            .toPromise()
            .then(function (res) { return todo; })
            .catch(this.handleError);
    };
    TodoService.prototype.handleError = function (error) {
        console.log("Error happened!", error);
        return Promise.reject(error.message || error);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map