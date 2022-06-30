import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatCardModule} from '@angular/material/card';
import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LoginComponent } from './login/login.component';
import { DialogInvComponent } from './dialog-inv/dialog-inv.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { FilterPipe } from './filter.pipe';
import { FilterPipe2 } from './filter2.pipe';
import { InvaintComponent } from './invaint/invaint.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoursesComponent,
    UsersComponent,
    LoginComponent,
    DialogInvComponent,
    FilterPipe,
    FilterPipe2,
    InvaintComponent,
    
  ],
  entryComponents:[DialogInvComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
