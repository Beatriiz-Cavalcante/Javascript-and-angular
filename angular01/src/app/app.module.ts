import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu.component';
import { ButtonComponent } from './componentes/button.component';
import { EntryDataComponent } from './componentes/entry-data.component'


@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent, 
    ButtonComponent,
    EntryDataComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
