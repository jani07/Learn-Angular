import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { PracticeComponent } from './practice/practice.component';
@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
