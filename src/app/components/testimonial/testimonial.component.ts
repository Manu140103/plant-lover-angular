import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html'
})
export class TestimonialComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    try {
      // inicialización opcional si usas owlcarousel
      // ($('.testimonial-carousel') as any).owlCarousel({ items:1, loop:true, autoplay:true });
    } catch(e){}
  }
}
