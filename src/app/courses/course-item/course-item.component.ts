import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CourseService } from 'src/app/course/services/course.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  // @Input() title : string;
  // @Input() instructor : string;
  // @Input() isAvailable : boolean;
  @Input('courseData')course;
  @Output() CourseClick = new EventEmitter<string> ();
  
  
  constructor(private _courseService : CourseService) { 
    console.log(_courseService);
   }

  ngOnInit(): void {
  }

  onClick(){
    this.CourseClick.emit(this.course.title);
  }
}
