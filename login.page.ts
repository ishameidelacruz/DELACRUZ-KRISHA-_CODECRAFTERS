import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
 
})
export class LoginPage implements OnInit {
  users = [
    { userName: 'user', password: '1234' },
    { userName: 'admin', password: '12345' },
  ];
  userName:string = '';
  password:string = '';
  constructor(private router: Router ) { }
  
  login() {
    if (this.userName == 'user' && this.password === '1234') {
     this.router.navigate(['/home']);
    } else if (this.userName === 'admin' && this.password === '12345'){
      this.router.navigate(['/admin']); 
    }
     else {
      alert('Invalid username or password');
      this.router.navigate(['/login']);
    } 
    
  }
  
  
  ngOnInit() {
  }

}
