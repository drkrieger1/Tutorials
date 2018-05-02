import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: ' ',
    lastName: ' ',
    email: ' '
  }

  users: User[];
  showExtended: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Erik',
        lastName: 'Plyushko',
        email: 'eplyushko@gmail.com',
        isActive: true,
        hide: true
     },
     {
        firstName: 'Bill',
        lastName: 'Johnsen',
        email: `bill@mail.com`,
        
      isActive: false,
      hide: true
     },
     {
        firstName: 'Jill',
        lastName: 'Basher',
        email: `jill@mail.com`,
      isActive: false,
      hide: true
     }
    ];

    // this.showExtended = false;

    // this.addUser({
    //   firstName: 'Kirill',
    //   lastName: 'Plyushko',
    //   age: 25,
    //   address: {
    //     street: '55 mill st',
    //     city: 'Miami',
    //     zip: 98198
    //   },
    //   isActive: true,
    //   hide: true
    // });

   
  }

  addUser() {
    this.user.isActive = true;
    
    this.users.unshift(this.user);
    this.user = {
        firstName: '',
        lastName: '',
        email: ''
    }
    this.showUserForm = false;
  }


  onSubmit(e){
    console.log(123);
    e.preventDefault();
  }
 

}
