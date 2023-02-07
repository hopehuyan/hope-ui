import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleTooltipsComponent } from './multiple-tooltips.component';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SingleTooltipTemplateComponent } from './single-tooltip-template/single-tooltip-template.component';
import { VcpOverlayPanelModule } from '../vcp-overlay-panel/vcp-overlay-panel.module';
@NgModule({
  declarations: [MultipleTooltipsComponent, SingleTooltipTemplateComponent],
  exports: [MultipleTooltipsComponent, SingleTooltipTemplateComponent],
  imports: [CommonModule, ButtonModule, OverlayPanelModule, VcpOverlayPanelModule]
})
export class MultipleTooltipsModule {}
