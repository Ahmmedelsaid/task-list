import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  constructor(private http: HttpClient) {}
  fetchTasks() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
