import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { GeneratePnjComponent } from './generate-pnj/generate-pnj.component';


const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'generate-pnj',      component: GeneratePnjComponent },
  { path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  { path: '**', component: AccueilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
		HeaderComponent,
		GeneratePnjComponent
  ],
  imports: [
		RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
		),
		FormsModule,
    BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatMenuModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
