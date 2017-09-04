import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { ToolService } from '../tool/tool.service';
import { ITool, Tool } from '../tool/tool';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-tool-form',
  templateUrl: './tool-form.component.html',
  styleUrls: ['./tool-form.component.scss'],
  providers: [ToolService]
})

export class ToolFormComponent implements OnInit {

  service: ToolService;
  tool: ITool;

  name = '';
  url = '';
  about = '';
  tags = '';
  user = '';

  constructor(private _service: ToolService) {
    this.service = _service;
  }

  submit(): void {
    let like = [this.user];
    let tags = this.tags.split(',');
    let item = new Tool(
      this.name,
      this.url,
      this.about,
      like,
      tags,
      this.user
    );
    this._service.createTool(item);
  }

  ngOnInit() {
  }

}
