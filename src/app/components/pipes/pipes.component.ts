import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  someText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.';

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
