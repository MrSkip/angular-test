import { Component, OnInit } from '@angular/core';
import {NotificationsService} from "angular2-notifications";
import {log} from "util";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private _notify: NotificationsService) { }

  ngOnInit() {
    this._notify.info("Test", "You are doing a great job");
    log("test");
  }

}
