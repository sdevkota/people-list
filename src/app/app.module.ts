import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/users/list/list.component';
import { UserComponent } from './components/users/user/user.component';

//routing
const routes: Routes = [{ path: '', component: ListComponent }];

@NgModule({
  declarations: [AppComponent, ListComponent, UserComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
