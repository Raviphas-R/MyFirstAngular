import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]',
})
export class PlaceholderDirective {
  constructor(public viewContinerRef: ViewContainerRef) {}
}

// This for Programmatic Creation
