import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IdsButtonComponent } from './components/ids-button/ids-button.component';
import { IdsMessageDialogComponent } from './components/ids-message-dialog/ids-message-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    IdsButtonComponent,
    IdsMessageDialogComponent
  ],
  imports: [ BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
