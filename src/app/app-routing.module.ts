import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { AuthGuardService } from './auth-guard.service';
import { MoviesComponent } from './movies/movies.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { PostProductComponent } from './post-product/post-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/address',
    component: AddressComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'report/:id',
    component: ProductComponent
  },
  {
    path: 'cart/',
    component: CartComponent
  },
  {
    path: 'categories/:id',
    component: CategoryComponent,
  },
  {
    path: 'profile/postproduct',
    component: PostProductComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/myproducts',
    component: MyProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: '',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
