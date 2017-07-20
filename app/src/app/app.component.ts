import { Component } from '@angular/core';
import { loversInstance, web3 } from '../services/web3.servive';
import { flatten, map, times } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messages: string[];
  message: any = {};
  from = { from: web3.eth.accounts[0] };

  constructor() {
    this.getMessages();
  }

  addMessage() {
    var self = this;
    loversInstance().then((instance) => {
      instance.recordMessage(this.message.firstName, this.message.lastName, this.message.message, self.from).then((response) => {
        self.getMessages();
      });
    });
  }

  getMessages() {
    var self = this;
    loversInstance().then((instance) => {
      instance.getMessages().then((response) => {
        var len = 0;
        var list = [];
        var arr = flatten(map(response, (messages: any[], i) => {
          len = messages.length;
          return messages;
        }));
        times(len, (i) => {
          list.push({
            id: arr[i].toString(),
            firstName: web3.toUtf8(arr[i + len].toString()),
            lastName: web3.toUtf8(arr[i + len * 2].toString()),
            message: web3.toUtf8(arr[i + len * 3].toString())
          });
        });
        this.messages = list;
      })
    });
  }

}
