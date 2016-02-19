import {Component} from 'angular2/core';
import {TaskListComponent} from '../task-list/task-list.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app/template.html',
  directives: [TaskListComponent]
})
export class AppComponent {
  
}
