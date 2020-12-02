import { BrowserModule } from '@angular/platform-browser';
import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProjectDetailsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
