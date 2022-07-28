import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {

  constructor(private datosPorfolio: PorfolioService) { }
proyectList: any;
proyect1List: any;
  ngOnInit(): void {
    this.datosPorfolio.obtnerDatos().subscribe(data => {
      this.proyectList = data.proyect;
this.proyect1List = data.proyect1;
    })
  }

}
