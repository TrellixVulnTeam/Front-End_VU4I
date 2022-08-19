import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
//persona: persona= new persona("", "", "");
//constructor(public personaService: PersonaService){}
//ngOnInit(): void {
//this.personaService.getPersona().subscribe(data => {this.persona=data})
//}






//para los .json
  constructor(private datosPorfolio: PorfolioService) { }
miList: any;
  ngOnInit(): void {
    this.datosPorfolio.obtnerDatos().subscribe(data => {
      this.miList = data.mi;

    })}






}
