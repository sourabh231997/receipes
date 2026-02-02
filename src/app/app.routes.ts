import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShopdetailComponent } from './shopdetail/shopdetail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-detail', component: BlogdetailComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop-detail', component: ShopdetailComponent }
  // {path:'**',redirectTo:'/',pathMatch:'full'}
  // { path: '**', redirectTo: '' },
];
