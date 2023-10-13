import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    SidebarUserComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MyProfileComponent,
    SidebarUserComponent,
  ]
})
export class ProfileModule { }
