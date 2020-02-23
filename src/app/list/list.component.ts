import { Component, OnInit } from '@angular/core';
import IUser from '../models/IUser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listUser: [];

  constructor(/*private http: HttpClient*/) { }

  ngOnInit() {
  }

// lisUsers(){
//   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((value: IUser[]) => {

//     //listUser = value.find()

//   }, (error: HttpErrorResponse) => {
//     console.error('error', error);
//   });

 
// }


}
