import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  size = 40;
  color = 'red';
  font = 'Arial';

  classes = ['green-title', 'small-title'];
  constructor() { }

  ngOnInit(): void {
  }

}
