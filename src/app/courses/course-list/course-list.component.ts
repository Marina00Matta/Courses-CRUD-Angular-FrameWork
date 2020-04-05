import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses = [
    {
      id : 1,
      title : 'NodeJs',
      instructor : 'Ali',
      isAvailable : true
    },
    {
      id : 2,
      title : 'JavaScript',
      instructor : 'Ahmed',
      isAvailable : true
    },
    {
      id : 3,
      title : 'HTML',
      instructor : 'Hager',
      isAvailable : false
    },
    {
      id : 4,
      title : 'Angular',
      instructor : 'Nada',
      isAvailable : false
    },
  ]
  clickCourseTitle;
  constructor() { }

  ngOnInit(): void {
  }

  // onCourseClick(data){
  //   console.log(data);
  //   this.clickCourseTitle = data;
  // }
}
