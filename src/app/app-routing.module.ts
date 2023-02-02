import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './component/post/post.component';
import { UserComponent } from './component/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserPostComponent } from './user-post/user-post.component';

const routes: Routes = [
  {path:'users', component:UserComponent},
  {path:'users/:id', component:UserPostComponent},
  {path:'posts', component:PostComponent},
  {path:'',redirectTo:'/users',pathMatch:'full'},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
