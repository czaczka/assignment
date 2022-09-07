
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private router:Router, private httpClient: HttpClient) { }


ngOnInit(): void {
}
clear() {
  sessionStorage.clear();
  this.router.navigateByUrl("/login");
}
}