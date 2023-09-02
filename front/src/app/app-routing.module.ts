import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './modules/admin-panel/admin-panel.component';
import { AddCourseComponent } from './modules/admin-panel/courses/add-course/add-course.component';
import { EditCourseComponent } from './modules/admin-panel/courses/edit-course/edit-course.component';
import { AddCategoryComponent } from './modules/admin-panel/categories/add-category/add-category.component';
import { CategoryComponent } from './modules/admin-panel/categories/category.component';
import { EditCategoryComponent } from './modules/admin-panel/categories/edit-category/edit-category.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path:'admin/panel', component:AdminPanelComponent
  },
  {
    path:'admin/panel/addCourse', component:AddCourseComponent
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
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
