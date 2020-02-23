import { Component, OnInit, ErrorHandler } from '@angular/core';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { timeout } from 'q';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import IUser from '../models/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  mdp: string;
  logged = false;
  loading = false;

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {


  }

  connexion() {

    // Connexion que avec un login 
    this.http.get('https://jsonplaceholder.typicode.com/users?username=' + this.login).subscribe((value: IUser[]) => {
      console.log('get : ' + this.login, value.length);





      if (value.length === 1) {
        this.logged = true;

        this._snackBar.open("Bonjour, " + this.login + " !", null, {
          duration: 2000,
        });
      }

      else {
        this._snackBar.open("Wrong Logged", null, {
          duration: 2000,
        });
      }

      this.loading = false;






    }, (error: HttpErrorResponse) => {
      console.error('error', error);
    });

    console.log('login', this.login);
    console.log('mdp', this.mdp);

    this.loading = true;

    // Connexion avec un MDP
    // setTimeout(() => {

    //   if (this.login === 'admin' && this.mdp === 'admin') {
    //     this.logged = true;
    //     this._snackBar.open("Logged", null, {
    //       duration: 2000,
    //     });
    //   }

    //   else {
    //     this._snackBar.open("Wrong Logged", null, {
    //       duration: 2000,
    //     });
    //   }

    //   this.loading = false;

    // }, 2000);



  }

}
