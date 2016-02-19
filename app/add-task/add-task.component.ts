import {Component} from 'angular2/core';
import {Task} from '../task';

@Component({
  selector: 'add-task',
  inputs: ['tasks'],
  templateUrl: 'app/add-task/template.html'
})
export class AddTaskComponent {
  public newTask: string = '';
  private tasks: Task[];
  
  addTask() {
    if (this.newTask) {
      let task = {
        id: 0,
        label: this.newTask,
        done: false
      };
      
      this.tasks.push(task);
      this.newTask = '';
    }
  }
}