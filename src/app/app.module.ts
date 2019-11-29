import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorToastComponent } from "./error-toast/error-toast.component";
import { NgTemplateOutletContextComponent } from "./ng-template-outlet-context/ng-template-outlet-context.component";
import { SuccessToastComponent } from "./success-toast/success-toast.component";
import { ViewContainerRefCompComponent } from "./view-container-ref-comp/view-container-ref-comp.component";
import { ChildComponent } from "./view-content-demo/child/child.component";
import { ParentComponent } from "./view-content-demo/parent/parent.component";
import { ViewContentQueryComponent } from "./view-content-query/view-content-query.component";
import { WarningToastComponent } from "./warning-toast/warning-toast.component";
import { DemoDynamicCompComponent } from './demo-dynamic-comp/demo-dynamic-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewContentQueryComponent,
    ChildComponent,
    ParentComponent,
    ViewContainerRefCompComponent,
    NgTemplateOutletContextComponent,
    WarningToastComponent,
    ErrorToastComponent,
    SuccessToastComponent,
    DemoDynamicCompComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SuccessToastComponent,
    WarningToastComponent,
    ErrorToastComponent
  ]
})
export class AppModule {}
