import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FetchdataService } from './fetchdata.service';


import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    PricingComponent,
    SidebarComponent,
    PostsComponent,
    PostComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [FetchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
function newFunction(): string {
  return 'pricing';
}

