import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoDynamicCompComponent } from './demo-dynamic-comp/demo-dynamic-comp.component';
import { NgTemplateOutletContextComponent } from "./ng-template-outlet-context/ng-template-outlet-context.component";
import { ViewContainerRefCompComponent } from "./view-container-ref-comp/view-container-ref-comp.component";
import { ViewContentQueryComponent } from "./view-content-query/view-content-query.component";

const routes: Routes = [
  { path: "view-content-query", component: ViewContentQueryComponent },
  { path: "view-container-ref", component: ViewContainerRefCompComponent },
  { path: "template-outlet", component: NgTemplateOutletContextComponent },
  { path: "dynamic-component", component: DemoDynamicCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
