import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChildComponent } from "./view-content-demo/child/child.component";
import { ParentComponent } from "./view-content-demo/parent/parent.component";
import { ViewContentQueryComponent } from "./view-content-query/view-content-query.component";

@NgModule({
  declarations: [
    AppComponent,
    ViewContentQueryComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
