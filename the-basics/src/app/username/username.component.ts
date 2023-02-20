import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username = '';

  onReset (){
    this.username = ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
