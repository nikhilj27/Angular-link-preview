import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxLinkPreviewModule } from 'ngx-link-preview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [AppComponent, DetailComponent, ProductListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLinkPreviewModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
