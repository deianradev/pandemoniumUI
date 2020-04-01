import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './navigation/navigation.component';

/* Fusion Charts */
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';

// Load Maps
import * as Maps from 'fusioncharts/fusioncharts.maps';

// Load WorldMap definition
import * as World from 'fusioncharts/maps/fusioncharts.world';

// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';

// Load FusionTheme theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import { MapComponent } from './map/map.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';

// Add dependencies for FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, Maps, World, FusionTheme)

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MapComponent,
    PieComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
