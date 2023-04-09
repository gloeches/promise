import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestPromiseComponent } from './test-promise/test-promise.component';
import { TestHttpComponent } from './test-http/test-http.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPromiseComponent,
    TestHttpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
