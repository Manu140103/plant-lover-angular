import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html'
})
export class TestimonialComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    try {
      // $('.testimonial-carousel').owlCarousel({ items:1, loop:true, autoplay:true });
    } catch(e){}
  }
}
