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