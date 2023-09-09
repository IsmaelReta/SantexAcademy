import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path:'admin/panel', component:AdminPanelComponent
  },
  {
    path:'admin/panel/courses', component:CourseComponent
  },
  {
    path:'admin/panel/addCourses', component:AddCourseComponent
  },
  {
    path:'admin/panel/editCourse/:id', component:EditCourseComponent
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
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
