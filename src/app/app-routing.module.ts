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


const routes:Routes= [
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Services', component:ContentComponent},
  {path:'Testimonials', component:TestimonialComponent},
  {path:'Gallery', component:GalleryComponent},
  {path:'Clients', component:ClientComponent},
  {path:'Blogs', component:BlogComponent},
  {path:'article/:id', component:ArticleComponent},
  {path:'Pricing', component:PricingComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
