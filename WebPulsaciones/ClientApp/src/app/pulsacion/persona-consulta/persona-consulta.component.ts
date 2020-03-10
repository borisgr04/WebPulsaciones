import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {

  personas:Persona[];
  constructor() { }

  ngOnInit() {
    this.personas = [
      {identificacion:"1", nombre:"Juan", sexo:"M" ,edad:3, pulsacion:41},
      {identificacion:"2", nombre:"Ana", sexo:"F" ,edad:20, pulsacion:52}
    ];
  }

}
