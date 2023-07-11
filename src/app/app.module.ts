import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarifRowComponent } from './components/tarif-row/tarif-row.component';
import { TarifListComponent } from './components/tarif-list/tarif-list.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TarifRowComponent,
    TarifListComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TarifRowComponent,
    TarifListComponent,
    ButtonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
