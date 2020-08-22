import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextEditorPageRoutingModule } from './text-editor-routing.module';

import { TextEditorPage } from './text-editor.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextEditorPageRoutingModule,
    CKEditorModule
  ],
  declarations: [TextEditorPage]
})
export class TextEditorPageModule {}
