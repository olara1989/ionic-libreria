import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {
  nombre:string = "Omar Emmanuel Lara";
  nom:string = "Victor";
  habilitado:boolean = false;
  escondido:boolean = true;
  variable:string ="";
  constructor() { }

  ngOnInit() {
  }
  mostrar_ocultar(){
    this.escondido = this.escondido ? false : true;
  }
}
