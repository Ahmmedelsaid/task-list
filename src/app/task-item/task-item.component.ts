import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() tasks: any;
  toggleCompletion(): void {
    this.tasks.completed = !this.tasks.completed;
  }
}
