// scroll-to.directive.ts
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollTo]'
})
export class ScrollToDirective {
  @Input() targetId: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const targetElement = document.getElementById(this.targetId);

    if (targetElement instanceof HTMLElement) {
      this.renderer.listen(this.el.nativeElement, 'click', () => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      console.error(`Element with ID ${this.targetId} not found or not an HTMLElement.`);
    }
  }
}
