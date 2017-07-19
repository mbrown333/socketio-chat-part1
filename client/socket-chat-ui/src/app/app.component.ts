import { Component } from '@angular/core';

import * as io from 'socket.io-client'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private url = 'http://localhost:3001'
  private socket;

  constructor() {
    this.socket = io(this.url)
    this.socket.emit('message', 'hello')
  }
}
