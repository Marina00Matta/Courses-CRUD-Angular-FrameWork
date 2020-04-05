import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class CourseService {
  private _courseSubject = new BehaviorSubject(null);
  // private courseSubject = new BehaviorSubject(null);

  constructor() { }

  changeCourseData(data){
    console.log(data);
    
    this._courseSubject.next(data);
  }

  get courseSubjectObservable(){
    return this.courseSubjectObservable();
  }


}
