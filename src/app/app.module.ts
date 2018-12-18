import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule} from '@angular/material';

import { AppComponent } from './app.component';
import { UserslistComponent } from './users/userslist/userslist.component';
import { UserService } from './users/user.service';
@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
