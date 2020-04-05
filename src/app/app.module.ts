import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { HomeComponent } from './home/home.component';
import { CourseService } from './course/services/course.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
  ],
  providers: [
    // CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
