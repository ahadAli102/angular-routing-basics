import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './component/post/post.component';
import { UserComponent } from './component/user/user.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { UserPostComponent } from './component/user-post/user-post.component';
import { UserAddComponent } from './component/user-add/user-add.component';

const routes: Routes = [
  {path:'users', component:UserComponent},
  {path:'users/add',component:UserAddComponent},
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
