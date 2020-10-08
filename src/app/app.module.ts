import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {UserModule} from './modules/user/user.module';
import {AllUsersComponent} from './modules/user/components/all-users/all-users.component';

const routes: Routes = [
  {path: 'users', component: AllUsersComponent},
  {path: 'posts', loadChildren: () => import(`./modules/post/post.module`).then(value => value.PostModule)},
  {path: 'comments', loadChildren: () => import(`./modules/comment/comment.module`).then(value => value.CommentModule)}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
