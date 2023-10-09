import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionCourseComponent } from './modules/description-course/description-course.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './modules/footer/footer.component';
import { AdminPanelComponent } from './modules/admin-panel/admin-panel.component';
import { EditCourseComponent } from './modules/admin-panel/courses/edit-course/edit-course.component';
import { AddCourseComponent } from './modules/admin-panel/courses/add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AddCategoryComponent } from './modules/admin-panel/categories/add-category/add-category.component';
import { EditCategoryComponent } from './modules/admin-panel/categories/edit-category/edit-category.component';
import { AddScheduleComponent } from './modules/admin-panel/schedules/add-schedule/add-schedule.component';
import { EditScheduleComponent } from './modules/admin-panel/schedules/edit-schedule/edit-schedule.component';
import { CategoryComponent } from './modules/admin-panel/categories/category.component';
import { ScheduleComponent } from './modules/admin-panel/schedules/schedule.component';
import { CourseComponent } from './modules/admin-panel/courses/course.component';
import { LoginComponent } from './modules/login/login/login.component';


@NgModule({
  declarations: [
    DescriptionCourseComponent,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    AppComponent,
    AdminPanelComponent,
    EditCourseComponent,
    AddCourseComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddScheduleComponent,
    EditScheduleComponent,
    CategoryComponent,
    ScheduleComponent,
    CourseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
