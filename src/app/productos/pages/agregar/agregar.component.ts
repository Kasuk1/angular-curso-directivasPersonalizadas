import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent{

  public miFormulario: FormGroup = this.fb.group({
    nombre: ["", Validators.required]
  });

  public mensaje: string = "Igor Chinchay";
  public color: string = "red";

  constructor(private fb: FormBuilder) { }

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarMensaje() {
    this.mensaje = Math.random().toString();
    console.log(this.mensaje)
  }
  
  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
