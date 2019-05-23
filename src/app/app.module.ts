import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
		HeaderComponent,
		
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatMenuModule, MatButtonModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
