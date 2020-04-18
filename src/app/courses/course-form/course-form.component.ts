import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from 'src/app/course/services/course.service';
import { course } from '../models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
course = new course();
  constructor(private _courseService: CourseService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form);
    if(form.valid){
      // console.log(form.value);
      // console.log(this.course);
      const course = {...this.course};
      this._courseService.addCourse(course);
      form.reset();
    }
    
  }
}
