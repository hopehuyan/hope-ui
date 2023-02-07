import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { VcpOverlayPanelComponent } from "../vcp-overlay-panel/vcp-overlay-panel.component";

@Component({
  selector: 'app-multiple-tooltips',
  templateUrl: './multiple-tooltips.component.html',
  styleUrls: ['./multiple-tooltips.component.scss']
})
export class MultipleTooltipsComponent implements OnInit, OnDestroy {
  @ViewChild('finalTemplate')
  _overlayPanel: VcpOverlayPanelComponent;
  @ViewChild('button')
  _button: ElementRef;
  @Input()
  length: any;
  @Input()
  template: TemplateRef<any> | null;
  @Input()
  trigger = 'hover';

  constructor() {}
  ngOnInit(): void {}

  @HostListener('mouseenter')
  private hoverShowEvent(event: any) {
    if (this.trigger === 'hover') {
      this._overlayPanel.show(event, this._button.nativeElement);
    }
  }

  @HostListener('mouseleave')
  private hoverHideEvent() {
    if (this.trigger === 'hover') {
      this._overlayPanel.hide();
    }
  }

  ngOnDestroy() {

  }
}
