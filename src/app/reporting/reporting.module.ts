import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { ReportingRoutingModule } from './reporting-routing.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [ReportingRoutingModule, CommonModule],
})
export class ReportingModule {}
