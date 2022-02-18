import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import * as numeral from 'numeral'; 

@Directive({
  selector: '[appMobileFormat]'
})
export class MobileFormatDirective {
 @Input('min') public MIN: number;
 @Input('max') public MAX: number;
 @Input('length') public MAX_NO_OF_DIGITS: number;
 @Input('format') public FORMAT: string;
 @Input('isDecimal') public FORMATDECIMAL: boolean = false;
 @Input() regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);

 private specialKeys: Array<string> = ['Backspace'];
 private eleRef: HTMLInputElement;

 constructor(
     private elementRef: ElementRef
 ) {
     this.eleRef = this.elementRef.nativeElement;
 }

 public ngOnInit() {
     this.format(this.eleRef.value);
     console.log()
 }


 @HostListener('keydown', ['$event'])
 public onKeyDown(event: KeyboardEvent) {
     if ((this.specialKeys.indexOf(event.key) !== -1)) {
         return;
     }
     let next: string = this.getNextValue(event);
     this.preventIfNotNumber(event, next);
     this.preventIfReachedMaxDigits(event, next);
    
 }

 private getNextValue(event) {
     let current = this.elementRef.nativeElement.value;
     if (!this.FORMATDECIMAL) {
         current = numeral(current).value();
     }
     if (!!current) {
         return this.addStr(String(current), event.key);
     }
     else return event.key;
 }
 addStr(str, stringToAdd) {
    
     return (
         str.substring(0, this.elementRef.nativeElement.selectionStart) +
         stringToAdd +
         str.substring(this.elementRef.nativeElement.selectionEnd, str.length)
     );
 }

 private format(value) {
     console.log(value)
     if (this.eleRef.value == null || this.eleRef.value == "") return;

     if (String(value).length > 18) {
        console.log("hi")
         console.log(String(value).length)
         value = String(value).slice(0, 18);
     }

     if(String(value).length > this.MAX_NO_OF_DIGITS) {
        console.log("hello")
         value = String(value).slice(0, this.MAX_NO_OF_DIGITS);
     }

     this.eleRef.value = numeral(value).format(this.FORMAT);
     console.log(this.eleRef.value)
 }

 
 private preventIfNotNumber(event, next) {
     if (next && !String(next).match(this.regex)) {
         event.preventDefault();
     }
 }

 private preventIfReachedMaxDigits(event, next) {
     
     if (this.MAX_NO_OF_DIGITS && String(next).length > this.MAX_NO_OF_DIGITS) {
       console.log(this.MAX_NO_OF_DIGITS)
         event.preventDefault();
     }
 }

}
