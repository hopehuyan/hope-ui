import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VcpOverlayPanelComponent } from './vcp-overlay-panel.component';

@NgModule({
  declarations: [VcpOverlayPanelComponent],
  exports: [VcpOverlayPanelComponent],
  imports: [CommonModule]
})
export class VcpOverlayPanelModule {}
