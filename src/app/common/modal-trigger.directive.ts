import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './j-query.service';

@Directive({
  selector: '[afModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
   }

  ngOnInit(): void {
    this.el.addEventListener('click', e => {
      this.$('#simple-modal').modal({});
    });
  }

}