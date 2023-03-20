import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight = '';

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.highlight(this.appHighlight);
  }

  highlight(date: string): void {
    const creationDate = new Date(date);
    const currentTime = new Date();
    if (creationDate < currentTime) {
      this.el.nativeElement.style.border = '2px solid green';
    } else if (creationDate > currentTime) {
      this.el.nativeElement.style.border = '2px solid blue';
    }
  }
}
