import {Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: string, serverContentInput: string) {
    this.serverCreated.emit({serverName: serverNameInput, serverContent: serverContentInput});
  }

  onAddBlueprint(serverNameInput: string, serverContentInput: string) {
    this.blueprintCreated.emit({serverName: serverNameInput, serverContent: serverContentInput});
  }
}
