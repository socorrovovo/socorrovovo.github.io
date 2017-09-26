import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

import { ITool } from '../tool/tool';
import { ILike } from '../like/like';
import { ToolService } from '../tool/tool.service';
import { AuthService } from '../auth/auth.service';
import { LikeService } from '../like/like.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss']
})
export class ToolListComponent implements OnInit {

  tools: FirebaseListObservable<any>;
  service: ToolService;
  user: string;
  likeSvc: LikeService;

  constructor(
    private _service: ToolService,
    private db: AngularFireDatabase,
    private _auth: AuthService,
    private _likeSvc: LikeService
  ) {
    this.user = _auth.currentUserId;
    this.service = _service;
    this.likeSvc = _likeSvc;
    this.tools = <FirebaseListObservable<any>> this.service.tools.map((items) => {
      return items.map((item: ITool) => {
        console.log(item.$key);
        item.count = this.likeSvc.countLike(item.$key);
        const username = db.object(`users/${item.user}`);
        username.subscribe(res => item.user = res.username || res.name.split(' ', 1));
        return item;
      });
    });

  }

  toggleLike(event: Event, tool: string) {
    event.preventDefault();
    this.service.toggleLike(tool);
  }

  ngOnInit() {}

}
