import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { SearchResultsComponent } from './core/components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
