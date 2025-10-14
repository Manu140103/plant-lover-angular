import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // opcional si lo necesitas globalmente
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppComponent // bootstrap de un componente standalone funciona si está en imports
  ],
  providers: [],
})
export class AppModule {}
