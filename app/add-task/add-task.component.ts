import {Component} from 'angular2/core';
import {Task} from '../task';
import {TaskService} from '../service/task.service';

@Component({
  selector: 'add-task',
  inputs: ['tasks'],
  templateUrl: 'app/add-task/template.html'
})
export class AddTaskComponent {
  public newTask: string = '';
  private tasks: Task[];
  
  constructor(private _taskService: TaskService) {
  }
  
  addTask() {
    if (this.newTask) {
      let task = {
        id: 0,
        label: this.newTask,
        done: false
      };
      
      this._taskService.addTask(task)
        .then(t => {
          this.tasks.push(t);
        });
    }
  }
}