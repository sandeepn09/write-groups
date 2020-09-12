import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {

  stage = 1;

  constructor() { }

  ngOnInit() {
  }

  nextStage() {
    this.stage = this.stage + 1;
  }

}
