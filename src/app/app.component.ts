import { Component } from '@angular/core';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BookingComponent } from './components/booking/booking.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TopbarComponent,
    NavbarComponent,
    CarouselComponent,
    BookingComponent,
    AboutComponent,
    ServicesComponent,
    FeaturesComponent,
    PricingComponent,
    TeamComponent,
    TestimonialComponent,
    BlogComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
