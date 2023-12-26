import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-componet',
  templateUrl: './first-componet.component.html',
  styleUrls: ['./first-componet.component.scss']
})
export class FirstComponetComponent implements OnInit {
  name: string = 'Raphael';
  idade: number = 20;
  job = 'Developer';
  hobbies = ['Play', 'Read', 'Study'];
  car = {
    nome: 'Ferrari',
    cor: 'Red',
    year: 2020
  }

  constructor() { }

  ngOnInit(): void {
  }

}
