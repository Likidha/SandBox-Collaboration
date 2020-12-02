import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/blog', pathMatch: 'full'},
  {path: 'blog', component: BlogComponent},
  {path: '**', component: ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
