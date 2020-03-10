import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona:  Persona;
  constructor() { }

  ngOnInit() {
    this.persona= new  Persona();
  }

  add() {
    alert(JSON.stringify(this.persona));
  }
}
