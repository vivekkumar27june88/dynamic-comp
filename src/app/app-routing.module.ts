import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewContentQueryComponent } from "./view-content-query/view-content-query.component";

const routes: Routes = [
  { path: "view-content-query", component: ViewContentQueryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
