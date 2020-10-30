import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighchartsPieComponent } from './pie-chart/highcharts-pie/highcharts-pie.component';
import { HttpClientModule } from '@angular/common/http';
import { C3BarComponent } from './bar-chart/c3-bar/c3-bar.component';
import { C3PieComponent } from './pie-chart/c3-pie/c3-pie.component';
import { C3LineComponent } from './line-chart/c3-line/c3-line.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartsLineComponent } from './line-chart/highcharts-line/highcharts-line.component';
import { HighchartsBarComponent } from './bar-chart/highcharts-bar/highcharts-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    C3PieComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    HighchartsPieComponent,
    C3BarComponent,
    C3LineComponent,
    HighchartsLineComponent,
    HighchartsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
