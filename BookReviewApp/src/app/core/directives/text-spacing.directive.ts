import { Directive, ElementRef, Input } from '@angular/core';
import { padding } from '../enums';

@Directive({
  selector: '[appTextSpacing]',
})
export class TextSpacingDirective {
  constructor(protected el: ElementRef) {}

  @Input() set appTextSpacing(style: { direction: padding; value: string }) {
    if (style.direction) {
      this.el.nativeElement.style[`${style.direction}`] = style.value + 'px';
    }
  }
}
