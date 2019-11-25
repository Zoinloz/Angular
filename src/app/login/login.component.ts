import { Component, OnInit, ErrorHandler } from '@angular/core';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { timeout } from 'q';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  mdp: string;
  logged = true;
  loading = false;

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(value => {
      console.log(value);
    });
    console.log('ici');

  }

  connexion() {
    console.log('login', this.login);
    console.log('mdp', this.mdp);

    this.loading = true;

    setTimeout(() => {

      if (this.login === 'admin' && this.mdp === 'admin') {
        this.logged = true;
        this._snackBar.open("Logged", null, {
          duration: 2000,
        });
      }

      else {
        this._snackBar.open("Wrong Logged", null, {
          duration: 2000,
        });
      }

      this.loading = false;

    }, 2000);



  }

}
