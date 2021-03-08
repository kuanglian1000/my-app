import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageService 參數可供外部存取,所以要改為 public
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
