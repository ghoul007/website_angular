import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ClientComponent } from './client/client.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Services', component: ContentComponent },
  { path: 'Testimonials', component: TestimonialComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Clients', component: ClientComponent },
  { path: 'Blogs', component: BlogComponent, canActivate:[AuthGuard] },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
