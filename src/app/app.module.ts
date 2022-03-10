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
import { PizzaComponent } from './components/pizza/pizza.component';
import { PopupComponent } from './components/popup/popup.component';
import { PopupItemComponent } from './components/popup/popup-item/popup-item.component';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {environment} from "../environments/environment.prod";
import {viewAreaInfoReducer} from "./store/reducers/view-area-info.reducer";
import {ViewAreaInfoEffects} from "./store/effects/view-area-info.effects";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppHeaderComponent,
    AppLogoComponent,
    AppBasketComponent,
    FilterComponent,
    TabsComponent,
    PizzaComponent,
    PopupComponent,
    PopupItemComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
      StoreModule.forRoot({
        viewArea: viewAreaInfoReducer
      }),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production
      }),
      EffectsModule.forRoot([
        ViewAreaInfoEffects
      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
