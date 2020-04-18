import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseService } from '../course/services/course.service';
import {FormsModule} from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [CoursesComponent,
     CourseListComponent, 
    CourseDetailsComponent,
     CourseItemComponent,
      CourseFormComponent,
      CourseFormComponent,
      HttpClientModule,

    ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule
  ],
  providers:[CourseService],
  exports:[CoursesComponent],
})
export class CoursesModule { }
