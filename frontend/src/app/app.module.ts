import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/includes/header/header.component';
import { RatingModule } from 'ng-starrating';
import { ToastrModule } from 'ngx-toastr'
import { SearchComponent } from './components/includes/search/search.component';
import { TagComponent } from './components/includes/tag/tag.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/includes/title/title.component';
import { NotFoundComponent } from './components/includes/not-found/not-found.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './components/includes/input-container/input-container.component';
import { InputValidationComponent } from './components/includes/input-validation/input-validation.component';
import { TextInputComponent } from './components/includes/text-input/text-input.component';
import { DefaultButtonComponent } from './components/includes/default-button/default-button.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoadingComponent } from './components/includes/loading/loading.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { OrderItemsListComponent } from './components/includes/order-items-list/order-items-list.component';
import { MapComponent } from './components/includes/map/map.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PaymentComponent } from './components/pages/payment/payment.component';
import { PaypalButtonComponent } from './components/includes/paypal-button/paypal-button.component';
import { TrackOrderComponent } from './components/pages/track-order/track-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    TagComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterComponent,
    LoadingComponent,
    CheckoutComponent,
    OrderItemsListComponent,
    MapComponent,
    PaymentComponent,
    PaypalButtonComponent,
    TrackOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      newestOnTop: true
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 