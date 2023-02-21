import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterLinkActive],
  exports: [RouterModule, RouterLinkActive],
})
export class AppRoutingModule {}
