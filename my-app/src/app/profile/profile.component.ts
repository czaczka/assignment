import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

}
