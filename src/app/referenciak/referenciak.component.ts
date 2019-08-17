import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referenciak',
  templateUrl: './referenciak.component.html'
})
export class ReferenciakComponent implements OnInit {
  public mapheight: string;

  constructor() { }

  private MapResize(wHeight: number): void {
    this.mapheight = wHeight - 80 + 'px';
  }

  ngOnInit() {
    this.MapResize(window.innerHeight);
  }

  onResize(event) {
    this.MapResize(event.target.innerHeight);
  }
}
