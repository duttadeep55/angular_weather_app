import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { WeaComponent }  from './dashboard.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule],
  declarations: [ AppComponent,WeaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
