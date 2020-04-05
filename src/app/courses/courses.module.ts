import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseService } from '../course/services/course.service';


@NgModule({
  declarations: [CoursesComponent, CourseListComponent, 
    CourseDetailsComponent, CourseItemComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  providers:[CourseService],
  exports:[CoursesComponent],
})
export class CoursesModule { }
