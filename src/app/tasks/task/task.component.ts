import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
type Task = {
  id: number,
  userId: string,
  title: string,
  summary: string,
  dueDate: string
};

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true}) task!: Task;
  
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
