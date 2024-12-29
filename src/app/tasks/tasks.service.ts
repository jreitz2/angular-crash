import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = [
        {
          id: 1,
          userId: 'u1',
          title: 'Task 1',
          summary: 'Summary 1',
          dueDate: '2021-01-01'
        },
        {
          id: 2,
          userId: 'u1',
          title: 'Task 2',
          summary: 'Summary 2',
          dueDate: '2021-01-02'
        },
        {
          id: 3,
          userId: 'u1',
          title: 'Task 3',
          summary: 'Summary 3',
          dueDate: '2021-01-03'
        }
      ];

      constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
          this.tasks = JSON.parse(tasks);
        }
      }

      getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
      }

      addTask(taskData: {title: string; summary: string; date: string}, userId: string) {
        this.tasks.push({
          id: this.tasks.length + new Date().getTime(),
          userId: userId,
          title: taskData.title,
          summary: taskData.summary,
          dueDate: taskData.date
        });
        this.saveTasks();
      }

      removeTask(taskId: number) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
      }

      private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
}