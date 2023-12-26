import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-id-render',
  templateUrl: './id-render.component.html',
  styleUrls: ['./id-render.component.scss']
})
export class IdRenderComponent implements OnInit {
  canShow = true;
  @Input() nameIf!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
