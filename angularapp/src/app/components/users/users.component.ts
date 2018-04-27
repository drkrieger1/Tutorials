import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Erik',
        lastName: 'Plyushko',
        age: 26,
        address: {
            street: '1234 5th ave',
            city: 'Seattle',
            zip: 98002
        },
        isActive: true,
        hide: true
     },
     {
        firstName: 'Bill',
        lastName: 'Johnsen',
        age: 20,
        address: {
          street: '1354 10th ste',
          city: 'Seattle',
          zip: 98055
      },
      isActive: false,
      hide: true
     },
     {
        firstName: 'Jill',
        lastName: 'Basher',
        age: 30,
        address: {
          street: '1436 2nd ave',
          city: 'Seattle',
          zip: 98002
      },
      isActive: false,
      hide: true
     }
    ];

    // this.showExtended = false;

    this.addUser({
      firstName: 'Kirill',
      lastName: 'Plyushko',
      age: 25,
      address: {
        street: '55 mill st',
        city: 'Miami',
        zip: 98198
      },
      isActive: true,
      hide: true
    });

   
  }

  addUser(user:User) {
    this.users.push(user);
  }

  fireEvent(e){
    console.log(e.type);
  }

  toggleHide(user: User){
    user.hide = !user.hide;
  }

  onSubmit(e){
    console.log(123);
    e.preventDefault();
  }
 

}
