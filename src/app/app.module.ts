import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { Activity19Component } from "./components/activity19/activity19.component";
import { Activity20Component } from "./components/activity20/activity20.component";
import { Activity21Component } from "./components/activity21/activity21.component";
import { Activity22Component } from "./components/activity22/activity22.component";


const routes: Routes = [
  { path: 'activity19', component: Activity19Component},
  { path: 'activity20', component: Activity20Component},
  { path: 'activity21', component: Activity21Component},
  { path: 'activity22', component: Activity22Component},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],

  declarations: [
    AppComponent,
    Activity19Component,
    Activity20Component,
    Activity21Component,
    Activity22Component,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
