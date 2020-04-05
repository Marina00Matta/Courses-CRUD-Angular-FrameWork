import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course;
  constructor(private _courseService: CourseService) {
    console.log('constructor');
    
   }

  ngOnInit(): void {
    console.log('ngOnInit');
    
    this._courseService.courseSubjectObservable.subscribe( data =>{
      
      console.log(data);
      
      this.course = data;
      });

  }

}
