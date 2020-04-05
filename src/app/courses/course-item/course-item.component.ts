import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() title : string;
  @Input() instructor : string;
  @Input() isAvailable : boolean;
  // @Output() CourseClick = new EventEmitter ();
  // title = 'NodeJs';
  // instructor = 'Ali';
  // isAvailable = Math.random() > 0.5;
  
  constructor() { }

  ngOnInit(): void {
  }


}
