import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course/services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course;
  constructor(
    private _courseService: CourseService, 
    private _activatedRoute: ActivatedRoute,

  ) {
    
    console.log('constructor');
    
   }

  ngOnInit(): void {
    console.log('ngOnInit');
    
    // this._courseService.courseSubjectObservable.subscribe( data =>{
      
    //   console.log(data);
      
    //   this.course = data;
    //   });

    this._activatedRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      if (paramMap.has('id')){
        this.course = this._courseService.getCourseById(paramMap.get('id'));
      }
    })


  }
  // ngOnDestroy(){
  //   console.log('ngOnDestroy');
  //   this._courseSubscription.unsubscribe();
    
  // }
}
