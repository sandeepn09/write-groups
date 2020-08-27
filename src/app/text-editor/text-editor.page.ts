import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.page.html',
  styleUrls: ['./text-editor.page.scss'],
})
export class TextEditorPage implements OnInit {

  public editor = ClassicEditor;
  public data = "Test Data"
  public content: String = "";
  public mode = "edit";

  constructor() { }

  ngOnInit() {
  }

  preview() {
    this.mode = "preview";
    console.log("mode: ", this.mode);
  }

  edit() {
    this.mode = "edit";
    console.log("mode: ", this.mode);
  }

  saveContent() {
    console.log("Saving date: ", this.data);
  }

}
