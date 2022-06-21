import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { OrganizationComponent } from './organization/organization.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'courses', component:CoursesComponent},
  { path: 'organization', component:OrganizationComponent},
  { path: 'users', component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
