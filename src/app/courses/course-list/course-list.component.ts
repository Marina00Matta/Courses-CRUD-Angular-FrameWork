import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses;
  clickedCourseTitle;
  constructor(private _courseService : CourseService) { 
    console.log(_courseService);
  }

  ngOnInit(): void {
this.courses = this._courseService.getCourses().subscribe((res)=>{
  console.log(res);
  
});
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

