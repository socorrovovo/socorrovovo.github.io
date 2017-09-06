import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

import { ITool } from '../tool/tool';
import { ToolService } from '../tool/tool.service';
import {  } from '../auth/auth.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss']
})
export class ToolListComponent implements OnInit {

  tools: FirebaseListObservable<any>;

  constructor(private service: ToolService, db: AngularFireDatabase) {

    this.tools = <FirebaseListObservable<any>> service.tools.map((items) => {
      return items.map((item: ITool) => {
        item.count = item.like.length;
        let username = db.object(`users/${item.user}`);
        username.subscribe(res => item.user = res.username || res.name.split(' ', 1));
        return item;
      });
    });

  }

  ngOnInit() {}

}
