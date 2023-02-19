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
    In TS file, declare properties then render it out in HTML file - see Server component (serverID, serverStatus, getServerStatus())
    See Server component

  - **Property Binding** `( [property] = "data")`
    see Servers component
    use [] => property binding

2. User interact with HTML cause change in logic TS file
  - **Event Binding** `(( event ) = " expression ")`

3. Combination of both way: **Two way binding** `([ngModel] = " data ")`
