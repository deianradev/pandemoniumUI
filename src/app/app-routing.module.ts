import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from "./map/map.component";
import { PieComponent } from "./pie/pie.component";
import { BarComponent } from "./bar/bar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./auth/login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "about", component: AboutComponent }
  // { path: 'map', component: MapComponent },
  // { path: 'pie', component: PieComponent },
  // { path: 'bar', component: BarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
