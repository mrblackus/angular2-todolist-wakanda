import {Task} from '../task';

export class TaskService {
  
  private jsc;
  
  constructor() {
    this.jsc = WakJSC;
  }
  
  getTasks() {
    return this.jsc.getCatalog()
      .then(ds => {
        console.log('ds', ds);
        return ds.Task.query();
      });
  }
}