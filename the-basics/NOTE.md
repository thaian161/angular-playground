To create angular app, run `ng new app-name`
Add routing
Choose stylesheet format

Install Bootstrap for this project `npm i --save bootstrap@3`
In `angular.js`, add ` "node_modules/bootstrap/dist/css/bootstrap.min.css"` under `architect` > `styles`

In ```app.component.ts```
- @Component => selector attached to a string

# Component contains: example Server Component: it is a TS class
- server.component.ts
Declaration come with @, for example @Component.
In @Component, we put in an object with
    - selector: link to the HTML tag, it need to be unique
    - templateURL: 
We need to register Server component in the App Component. We register new component in the @NgModule declaration and import Server into App
``` 
server.component.ts

import {Component} from '@angular/core'

@Component({
  selector: 'app-server',
  templateURL: './server.component.html',

})
export class ServerComponent{
  
}
```
```
app.module.ts

import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
})
```

- styleUrls can be absent but template or templateURl is a MUST

# Create component with CLI

- Create component with the CLI `ng generate component servers` or short cut `ng g c servers`
- use external file ` templateUrl: './servers.component.html',` 
===  use inline style ` template: '<app-server></app-server><app-server></app-server>',` 
=== wrap in back tick
```
template: `
    <app-server><app-server>
    <app-server></app-server>`,

```

# Component Styles
```
styleUrls: ['./app.component.css']
})
``` 
- StyleUrls is an array, can hold many css files
- We can use it inline as well
```
styles: [`
  h3 {
    color: blue;
  }
`]
```

# Data Binding
- Communication between your logic in the TS file to the template view that user see

1. Output data from TS to HTML
  - **String Interpolation** `( {{ data }} )`
    - In TS file, declare properties then render it out in HTML file - see Server component (serverID, serverStatus, getServerStatus())
    - See Server component
    - Use this if you need to render text out

  - **Property Binding** `( [property] = "data")`
    - see Servers component
    - use [] => property binding
    - dynamic prop changes

2. User interact with HTML cause change in logic TS file
  - **Event Binding** `(( event ) = " expression ")`
    - `serverCreationStatus` in Servers
    - `onCreateServer()` in Servers 

3. Combination of both way: **Two way binding** `([ngModel] = " data ")`
- Important: **FormsModule** is Required for Two-Way-Binding!
- We need to import **FormModule** from @angular/forms in app.module.ts
```
import { FormsModule } from '@angular/forms'; 
```
and to the imports[] array
 ```
 imports: [
    BrowserModule,
    FormsModule
  ],
```
- Example of how to use ngModel in Servers component
```
<input
  type="text"
  class="form-control"
  [(ngModel)]="serverName"
>
<p>
  <span>Server Name is: </span>{{serverName}}
</p>
```

## All Forms of Data Binding
- Check username Component 

# Directives
- Directives are Instructions in the DOM!

## ngIF - Output Data Conditionally 
```
<p *ngIf="serverCreated">
   Server was created, server name is {{serverName}}
</p>
```

## Enhance *ngIF with Else condition
```
<p *ngIf="serverCreated else noServer">
   Server was created, server name is {{serverName}}
</p>
<ng-template #noServer>
  <p> No Server was created! </p>
</ng-template>
```

## Styling Element Dynamically with ngStyle
- Unlike structural directives, attribute directives do not add or remove elements. They only change the element they were placed on
- `[ngStyle] ="{backgroundColor: getColor()}"`
- In Server component HTML
```
 <p
    [ngStyle] ="{backgroundColor: getColor()}"
    >Status is {{  getServerStatus() }}
</p>
```
TS
```
getColor () {
 return this.serverName === 'online' ? 'lightGreen' : 'pink';
}
```

## CSS Dynamically Class with ngClass
`[ngClass] = "{online: serverStatus === 'online'}"`

## Output data list with ngFor