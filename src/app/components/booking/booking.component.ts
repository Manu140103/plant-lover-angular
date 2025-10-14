import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements AfterViewInit {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      service: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    try {
      ($('#date') as any).datetimepicker({ format: 'L' });
      ($('#time') as any).datetimepicker({ format: 'LT' });
    } catch (e) {}
  }

  submit() {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }
    console.log('Reserva enviada', this.bookingForm.value);
    alert('Reserva enviada: ' + JSON.stringify(this.bookingForm.value));
    this.bookingForm.reset();
  }
}
