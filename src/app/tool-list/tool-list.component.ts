import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ITool } from '../tool/tool';
import { ToolService } from '../tool/tool.service';
import { Observable } from 'rxjs/Observable';

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
        // item.user = db.database;
        return item;
      });
    });
    // this.tools = service.tools;

    // console.log(this.tools);
  }

  ngOnInit() {}

}
