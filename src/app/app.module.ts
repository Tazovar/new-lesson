import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/pages/main/main.component';
import { CardDetailsComponent } from './views/pages/card-details/card-details.component';
import { BasketComponent } from './views/pages/basket/basket.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardComponent } from './shared/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { TestModalComponent } from './test-modal/test-modal.component'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardDetailsComponent,
    BasketComponent,
    HeaderComponent,
    CardComponent,
    TestModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
