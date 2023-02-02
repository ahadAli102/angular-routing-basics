import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { PostComponent } from './component/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './component/nav/nav.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PostCommentComponent } from './component/post-comment/post-comment.component';
import { UserPostComponent } from './component/user-post/user-post.component';
import { UserAddComponent } from './component/user-add/user-add.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { HoverDirective } from './directive/hover.directive';
import { EmailvalidatorDirective } from './validator/emailvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    NavComponent,
    NotFoundComponent,
    PostCommentComponent,
    UserPostComponent,
    UserAddComponent,
    UserLoginComponent,
    HoverDirective,
    EmailvalidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
