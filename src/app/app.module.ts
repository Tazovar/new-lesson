import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PasswordMatchDirective } from './directives/password-match.directive';
import { PatternDirective } from './directives/pattern.directive';
import { TakenUsernameDirective } from './directives/taken-username.directive';
import { BannedWordDirective } from './directives/banned-word.directive';
import { RequiredDirective } from './directives/required.directive';
@NgModule({
  declarations: [
    AppComponent,
    PasswordMatchDirective,
    PatternDirective,
    TakenUsernameDirective,
    BannedWordDirective,
    RequiredDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
