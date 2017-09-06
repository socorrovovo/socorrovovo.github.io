import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ITool, Tool } from './tool';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ToolService {

  tool: ITool;
  tools: FirebaseListObservable<ITool[]>;

  uid;

  constructor(db: AngularFireDatabase, auth: AuthService) {

    // auth.uid$
    //   .subscribe(uid => {
    //     // const path = `/tools/${uid}`;
    //     // this.tools = db.list(path);
    //     this.uid = uid;
    //   });
    this.tools = db.list('/tools');
  }

  createTool(tool: ITool) {
    this.tool = new Tool(tool.name, tool.url, tool.about, [this.uid], tool.tags, this.uid);
    this.tools.push(this.tool);
  }

  updateTool() {}

  deleteTool() {}

}
