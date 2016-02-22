import {Task} from '../task';
import WakJSC from 'wakjsc/wakjsc';

export class TaskService {
  
  private jsc;
  
  constructor() {
    this.jsc = WakJSC;
  }
  
  getTasks() {
    return this.jsc.getCatalog()
      .then(ds => {
        return ds.Task.query();
      });
  }
}