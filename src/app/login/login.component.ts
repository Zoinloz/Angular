import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

login : string;
mdp : string;

  constructor() { }

  ngOnInit() {
  }

connexion(){
  console.log('login', this.login);
  console.log('mdp', this.mdp);
}

}
