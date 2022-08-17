import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CoursesComponent } from './courses/courses.component';
import { InvaintComponent } from './invaint/invaint.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'courses', component:CoursesComponent, canActivate: [AuthGuard]},
  { path: 'edit', component:CoursesComponent},
  { path: 'login', component:LoginComponent},
  { path: String(localStorage.getItem('urlInv')).split('"').join(''), component:InvaintComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'users', component:UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
