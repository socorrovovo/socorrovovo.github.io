import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ITool, Tool } from './tool';
import { LikeService } from '../like/like.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ToolService {

  afDB;
  likeSvc: LikeService;
  tool: ITool;
  tools: FirebaseListObservable<ITool[]>;
  uid;

  constructor(
    db: AngularFireDatabase,
    auth: AuthService,
    likeService: LikeService
  ) {

    // auth.uid$
    //   .subscribe(uid => {
    //     // const path = `/tools/${uid}`;
    //     // this.tools = db.list(path);
    //     this.uid = uid;
    //   });
    this.afDB = db;
    this.likeSvc = likeService;
    this.tools = db.list('/tools');
  }

  createTool(tool: ITool) {
    this.tool = new Tool(tool.name, tool.url, tool.about, [this.uid], tool.tags, this.uid);
    this
      .tools.push(this.tool)
      .then((key) => {
        this.likeSvc.toggleLike(key, this.uid);
      });
  }

  updateTool() {}

  deleteTool() {}

  toggleLike(tool: string) {
    this.likeSvc.toggleLike(tool, 'xQS7oFRluhcZcxoq2IkQI03mytm2');
    // this.likeSvc.toggleLike(tool, this.uid);
  }

}
