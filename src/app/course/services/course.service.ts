import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class CourseService {
  private _apiURI = 
  'http://afternoon-falls-30227.herokuapp.com/api/v1/courses';
  private _courseSubject = new BehaviorSubject(null);
  // private _courses = 
  //   [
  //     {
  //       id : 1,
  //       title : 'NodeJs',
  //       instructor : 'Ali',
  //       isAvailable : true
  //     },
  //     {
  //       id : 2,
  //       title : 'JavaScript',
  //       instructor : 'Ahmed',
  //       isAvailable : true
  //     },
  //     {
  //       id : 3,
  //       title : 'HTML',
  //       instructor : 'Hager',
  //       isAvailable : false
  //     },
  //     {
  //       id : 4,
  //       title : 'Angular',
  //       instructor : 'Nada',
  //       isAvailable : false
  //     },
    
  // ];

  constructor(private _http: HttpClient) { }

  changeCourseData(data){
    // console.log(data);
    
    this._courseSubject.next(data);
  }

  get courseSubjectObservable(){

    return this._courseSubject.asObservable();
  }

  getCourses() {
    // return this._courses;
    return this._http.get(this._apiURI);
  }

  getCourseById(id){
    // return this._courses.find( (course) => course.id == id);
  }

  addCourse(course){
    // this._courses.push(course);
  }

}
