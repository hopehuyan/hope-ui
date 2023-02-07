import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { OverlayPanel } from 'primeng/overlaypanel';
import { DomHandler } from 'primeng/dom';

@Component({
  selector: 'vcp-overlay-panel',
  template: `
    <div
      *ngIf="render"
      [ngClass]="'p-overlaypanel p-component'"
      [ngStyle]="style"
      [class]="styleClass"
      (click)="onContainerClick()"
      [@animation]="{
        value: overlayVisible ? 'open' : 'close',
        params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
      }"
      (@animation.start)="onAnimationStart($event)"
      (@animation.done)="onAnimationEnd($event)"
    >
      <div class="p-overlaypanel-content">
        <ng-content></ng-content>
        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
      </div>
      <button
        *ngIf="showCloseIcon"
        type="button"
        class="p-overlaypanel-close p-link"
        (click)="onCloseClick($event)"
        (keydown.enter)="hide()"
        [attr.aria-label]="ariaCloseLabel"
        pRipple
      >
        <span class="p-overlaypanel-close-icon pi pi-times"></span>
      </button>
    </div>
  `,
  animations: [
    trigger('animation', [
      state(
        'void',
        style({
          transform: 'scaleY(0.8)',
          opacity: 0
        })
      ),
      state(
        'close',
        style({
          opacity: 0
        })
      ),
      state(
        'open',
        style({
          transform: 'translateY(0)',
          opacity: 1
        })
      ),
      transition('void => open', animate('{{showTransitionParams}}')),
      transition('open => close', animate('{{hideTransitionParams}}'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./vcp-overlay-panel.component.scss']
})
export class VcpOverlayPanelComponent extends OverlayPanel {
  override align() {
    if (this.autoZIndex) {
      this.container.style.zIndex = String(this.baseZIndex + ++DomHandler.zindex);
    }
    DomHandler.absolutePosition(this.container, this.target);
    DomHandler.addClass(this.container, 'p-overlaypanel-flipped');
    // screen
    const screenWidth = document.body.clientWidth;

    const containerOffset = DomHandler.getOffset(this.container);
    const targetOffset = DomHandler.getOffset(this.target);
    const containerWidth = DomHandler.getWidth(this.container);
    const targetWidth = DomHandler.getWidth(this.target);
    const containerHeight = DomHandler.getHeight(this.container);
    const differenceValue = (containerWidth - targetWidth) / 2;
    const remainWidth = screenWidth - targetOffset.left - targetWidth;
    const halfContainerWidth = containerWidth / 2;

    // Calculate vertical position
    if (containerOffset.top < targetOffset.top) {
      this.container.style.setProperty('--marginTop', '-20px');
    } else {
      this.container.style.setProperty('--marginTop', `-${containerHeight + 40}px`);
    }

    //Calculate horizontal position
    if (remainWidth < halfContainerWidth) {
      if (containerOffset.left !== targetOffset.left) {
        this.container.style.setProperty('--overlayArrowLeft', `${containerWidth - targetWidth / 2}px`);
        this.container.style.setProperty('margin-left', '10px');
      } else {
        this.container.style.setProperty('--overlayArrowLeft', `${targetWidth / 2}px`);
        this.container.style.setProperty('margin-left', '-10px');
      }
    }
    if (remainWidth > halfContainerWidth) {
      if (containerOffset.left !== targetOffset.left) {
        this.container.style.setProperty('margin-left', `${differenceValue}px`);
      } else {
        this.container.style.setProperty('margin-left', `-${differenceValue}px`);
      }
      this.container.style.setProperty('--overlayArrowLeft', `${differenceValue + targetWidth / 2 - 10}px`);
    }

    if (targetOffset.top < DomHandler.getHeight(this.container)) {
      DomHandler.removeClass(this.container, 'p-overlaypanel-flipped');
    }
  }
  onContainerClick(): void{
    console.log('onContainerClick');
  }
}
