import {Component, OnInit} from 'angular2/core';
import {Task} from '../task';
import {AddTaskComponent} from '../add-task/add-task.component';
import {TaskService} from '../service/task.service';

@Component({
  selector: 'task-list',
  templateUrl: 'app/task-list/template.html',
  directives: [AddTaskComponent],
  providers: [TaskService]
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];
  
  constructor(private _taskService: TaskService) {
  }
  
  ngOnInit() {
    
    this._taskService.getTasks()
      .then(collection => {
        console.log(collection);
        this.tasks = collection.entities;
      });
  }
}
