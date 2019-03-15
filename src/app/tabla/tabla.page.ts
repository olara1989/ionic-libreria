import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {
  num:number;
  multiplos:number[] = [];
  constructor() { }

  ngOnInit() {
  }
  generar_tabla(){
     for(let i = 1; i<=10; i++){
        this.multiplos[i-1]=(i*this.num);
     }
  }
}
