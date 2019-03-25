import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  //            <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  username = '';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];
  showSecret = false;
  secret = 'Life is just an illusion';
  click = [];
  clickCount = 1;

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }


  clearUsername() {
    return this.username.length > 0;
  }

  onClearUsername() {
    this.username = '';
  }

  onShowSecret() {
    this.showSecret = !this.showSecret;
    this.click.push('Click: ' + this.clickCount++);
  }
}
