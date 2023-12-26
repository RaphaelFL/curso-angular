import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.scss']
})
export class IfRenderComponent implements OnInit {
  canShow = true;
  @Input() nameIf!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
