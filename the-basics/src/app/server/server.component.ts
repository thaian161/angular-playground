import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color:white
    }
  `]
})

export class ServerComponent {
 serverId: number = 10;
 serverStatus: string = "offline";

 //build in method of class component, it called once this component got created 
 constructor(){
  this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
 }

 getServerStatus() {
  return this.serverStatus;
 }

 getColor(){
  return this.serverStatus === 'online' ? 'lightGreen' : 'pink';
 }
}