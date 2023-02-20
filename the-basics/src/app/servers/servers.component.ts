import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false; //this is a property
  serverCreationStatus = "No Server was created"
  serverName=""

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Server name is: " + this.serverName
  }

  onUpdateServerName(event: any){
    console.log(event)
    this.serverName = event.target.value;
  }

}
