import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.page.html',
  styleUrls: ['./text-editor.page.scss'],
})
export class TextEditorPage implements OnInit {

  public editor = ClassicEditor;

  constructor() { }

  ngOnInit() {
  }

}
