import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionCourseComponent } from './modules/description-course/description-course.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AdminPanelComponent } from './modules/admin-panel/admin-panel.component';
import { AddCourseComponent } from './modules/admin-panel/courses/add-course/add-course.component';
import { EditCourseComponent } from './modules/admin-panel/courses/edit-course/edit-course.component';
import { AddCategoryComponent } from './modules/admin-panel/categories/add-category/add-category.component';
import { CategoryComponent } from './modules/admin-panel/categories/category.component';
import { EditCategoryComponent } from './modules/admin-panel/categories/edit-category/edit-category.component';
import { ScheduleComponent } from './modules/admin-panel/schedules/schedule.component';
import { AddScheduleComponent } from './modules/admin-panel/schedules/add-schedule/add-schedule.component';
import { EditScheduleComponent } from './modules/admin-panel/schedules/edit-schedule/edit-schedule.component';
import { CourseComponent } from './modules/admin-panel/courses/course.component';
import { LoginComponent } from './modules/login/login/login.component';

const routes: Routes = [
  {
    path: '', component:HomePageComponent
  },
  {
    path:'admin/panel', component:AdminPanelComponent
  },
  {
    path:'admin/panel/courses', component:CourseComponent
  },
  {
    path:'admin/panel/courses/addCourse', component:AddCourseComponent
  },
  {
    path:'admin/panel/courses/editCourse/:id', component:EditCourseComponent
  },
  {
    path:'admin/panel/categories', component:CategoryComponent
  },
  {
    path:'admin/panel/categories/addCourseCategory', component:AddCategoryComponent
  },
  {
    path:'admin/panel/categories/editCourseCategory/:id', component:EditCategoryComponent
  },
  {
    path:'admin/panel/schedules', component:ScheduleComponent
  },
  {
    path:'admin/panel/schedules/addSchedule', component:AddScheduleComponent
  },
  {
    path:'admin/panel/schedules/editSchedule/:id', component:EditScheduleComponent
  },
  {
    path: 'curso/:id',component:DescriptionCourseComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
