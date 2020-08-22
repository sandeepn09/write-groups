import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextEditorPage } from './text-editor.page';

describe('TextEditorPage', () => {
  let component: TextEditorPage;
  let fixture: ComponentFixture<TextEditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEditorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
