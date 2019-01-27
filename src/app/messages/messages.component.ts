import { Component, OnInit } from "@angular/core";

import { MessageService } from "../message.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  messages$: Observable<string[]>;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messages$ = this.messageService.getMessages();
  }

  clear() {
    this.messageService.clear();
  }
}
