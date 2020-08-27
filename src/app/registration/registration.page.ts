import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public parent:{firstName: string, lastName: string} = {firstName: '', lastName: ''};
  constructor() { }

  ngOnInit() {
    
  }

}
