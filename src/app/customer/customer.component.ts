import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private user:UserService) { 
       this.user.getListofUsers().subscribe((response)=> {console.log(response);});

  }

  ngOnInit(): void {
  }



}
