import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ViewContainerRefCompComponent } from "./view-container-ref-comp/view-container-ref-comp.component";
import { ChildComponent } from "./view-content-demo/child/child.component";
import { ParentComponent } from "./view-content-demo/parent/parent.component";
import { ViewContentQueryComponent } from "./view-content-query/view-content-query.component";
import { NgTemplateOutletContextComponent } from './ng-template-outlet-context/ng-template-outlet-context.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewContentQueryComponent,
    ChildComponent,
    ParentComponent,
    ViewContainerRefCompComponent,
    NgTemplateOutletContextComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
