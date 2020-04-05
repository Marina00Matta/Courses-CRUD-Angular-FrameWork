import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course/services/course.service';

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
  clickedCourseTitle;
  constructor(private _courseService : CourseService) { 
    console.log(_courseService);
  }

  ngOnInit(): void {
  }

  onCourseClick(ev){
    console.log(ev);
    this.clickedCourseTitle = ev;
  }

  onCourseItemClick(course)
  {
    this._courseService.changeCourseData(course);
  }



}

