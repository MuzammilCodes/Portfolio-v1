import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

  constructor(
    private el: ElementRef,
    private ngControl: NgControl
  ) {
    trimValueAccessor(ngControl.valueAccessor)
   }
   
  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value; 
    const valueTrim = value.trim(); 
    if (value !== valueTrim) { 
      this.el.nativeElement.value = valueTrim; 
    }
  }
}

function trimValueAccessor(valueAccessor: ControlValueAccessor) {
  const original = valueAccessor.registerOnChange;
  valueAccessor.registerOnChange = (fn: (_: unknown) => void) => {
    return original.call(valueAccessor, (value: unknown) => {
      return fn(typeof value === 'string' ? value.trim() : value);
    });
  };
}
