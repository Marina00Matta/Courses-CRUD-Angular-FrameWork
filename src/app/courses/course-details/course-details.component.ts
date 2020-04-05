import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  id = 1;
  title = 'NodeJs';
  instructor = 'Ali';
  isAvailable = true;

  constructor() { }

  ngOnInit(): void {
  }

}
