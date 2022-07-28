import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(private datosPorfolio: PorfolioService) { }
miList: any;
  ngOnInit(): void {
    this.datosPorfolio.obtnerDatos().subscribe(data => {
      this.miList = data.mi;

    })
}
}
