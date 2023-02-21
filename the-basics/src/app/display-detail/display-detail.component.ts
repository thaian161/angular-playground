import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {
  showDetail = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.showDetail = !this.showDetail; //toggle switch between true false
    this.log.push(this.log.length +1)
  }
}
