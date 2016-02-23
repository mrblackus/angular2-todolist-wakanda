import {Task} from '../task';
import WakJSC from 'wakjsc/wakjsc';

export class TaskService {
  
  private jsc;
  
  private _ds;
  private get ds() {
    if (!this._ds) {
      return this.jsc.getCatalog()
        .then(ds => {
          this._ds = ds;
          return ds;
        });
    }
    
    return Promise.resolve(this._ds);
  }
  
  constructor() {
    this.jsc = WakJSC;
  }
  
  getTasks() {
    return this.ds.then(ds => {
      return ds.Task.query();
    });
  }
  
  addTask(task: Task) {
    return this.ds.then(ds => {
      let newTask = ds.Task.create(task);
      return newTask.save();
    });
  }
}
