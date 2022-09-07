import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgSwitch } from '@angular/common';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';


import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import { Userobj } from '../userobj';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id = 0;
  username = "";
  email = "";
  role = "";

  constructor(private router: Router, private httpClient: HttpClient) { 
    if (!(sessionStorage.getItem('userlogin')=="true")){
      alert("login please");
      this.router.navigateByUrl("/login");
    }
    this.id = Number(sessionStorage.getItem('id'));
    this.username = sessionStorage.getItem('username')!;
    this.email = sessionStorage.getItem('useremail')!;
    this.role = sessionStorage.getItem('userrole')!;

    }
  ngOnInit(): void {
  }
  editFunc(){
    let userobj = {
      'id': this.id,
      'username': this.username, 
      'email': this.email, 
      'role': this.role
    }

    
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('email', this.email);
    sessionStorage.setItem('role', this.role);
    sessionStorage.setItem('id', this.id.toString());

    this.httpClient.post<Userobj[]>(BACKEND_URL + '/loginafter', userobj,  httpOptions)
      .subscribe((m: any) => {alert(JSON.stringify(m));});



  }

}
