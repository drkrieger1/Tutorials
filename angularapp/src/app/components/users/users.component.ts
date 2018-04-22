import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  enableAdd: boolean = true;

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
        image: 'http://lorempixel.com/200/200/people/3'
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
      image: 'http://lorempixel.com/200/200/people/3'
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
      image: 'http://lorempixel.com/200/200/people/3'
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
      image: 'http://lorempixel.com/200/200/people/4'
    });
  }

  addUser(user:User) {
    this.users.push(user);
  }

}
