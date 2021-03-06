import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { HttpClientModule }       from '@angular/common/http';

import { AppRoutingModule }       from './_routers/app-routing.module';

import { AppComponent }           from './_components/app.component';
import { CommitsComponent }       from './_components/commits/commits.component';
import { CommitDetailComponent }  from './_components/commit-detail/commit-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    CommitsComponent,
    CommitDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
