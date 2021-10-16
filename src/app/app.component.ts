import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'disparo-eventos';
  mensaje ='';
  contador = 0;
  segundos = 0;
  minutos = 0;
  actualizar(t) {
    this.contador++;
    if(this.contador===6){
      this.segundos=0;
      this.minutos++;
      this.contador = 0;
    }
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}
