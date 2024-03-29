import { Component, OnInit } from '@angular/core';
import { TasksServiceService } from '../tasks-service.service';
interface taskObject {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: taskObject[] = [
    {
      userId: 0,
      id: 0,
      title: '',
      completed: false,
    },
  ];
  constructor(private tasksService: TasksServiceService) {}
  ngOnInit(): void {
    this.tasksService.fetchTasks().subscribe({
      next: (res: any) => {
        this.tasks = res;
      },
    });
  }
}
