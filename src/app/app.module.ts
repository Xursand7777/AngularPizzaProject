import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppLogoComponent } from './components/app-logo/app-logo.component';
import { AppBasketComponent } from './components/app-basket/app-basket.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppHeaderComponent,
    AppLogoComponent,
    AppBasketComponent,
    FilterComponent,
    TabsComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
