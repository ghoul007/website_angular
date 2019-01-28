import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ClientComponent } from './client/client.component';
import { PricingComponent } from './pricing/pricing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './auth.guard';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent, outlet: 'popup' },
  { path: 'about', loadChildren: () => AboutModule },
  { path: 'services', component: ContentComponent },
  { path: 'testimonials', component: TestimonialComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'subscribe', component: SubscribeComponent, outlet: "popup" },
  { path: 'dashboard', loadChildren: () => UserDashboardModule, canActivate: [AuthGuard] },
  { path: 'blog', loadChildren: () => BlogModule, canActivate: [AuthGuard] },
  { path: 'pricing', component: PricingComponent },
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
