import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewContentQueryComponent } from "./view-content-query/view-content-query.component";
import { ViewContainerRefCompComponent } from "./view-container-ref-comp/view-container-ref-comp.component";

const routes: Routes = [
  { path: "view-content-query", component: ViewContentQueryComponent },
  { path: "view-container-ref", component: ViewContainerRefCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
