import {Component, OnInit} from 'angular2/core';
import {Task} from '../task';

@Component({
  selector: 'task-list',
  templateUrl: 'app/task-list/template.html'
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];
  
  ngOnInit() {
    this.tasks = [
      {
        id: 1,
        label: 'Do something',
        done: false
      },
      {
        id: 2,
        label: 'EAT',
        done: true
      }
    ];
  }
}
