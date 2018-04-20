import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  // Properties
  user: User;
     

   constructor(){   } 

   ngOnInit(){
    this.user = {
        firstName: 'Erik',
        lastName: 'Plyushko',
        age: 26,
        address: {
            street: '1234 5th ave',
            city: 'Seattle',
            zip: 98002
        }
     }
   }
}