import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Inicialización de carousel si usas plugin (opcional)
    try {
      // ejemplo para owl carousel si lo copiaste
      // $('.testimonial-carousel').owlCarousel({ items:1, loop:true, autoplay:true });
    } catch (e) {}
  }
}
