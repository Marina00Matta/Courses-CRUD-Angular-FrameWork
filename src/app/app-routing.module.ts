import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  
  {
    path:'about',
    component:AboutComponent,
  },
  // {
  //   path:'courses',
  //   component:CoursesComponent,
  // },
  
  
  
  
  
  
  
  
  
  { 
    path: 'courses',
     loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
