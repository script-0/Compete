import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  links = [
    {
      name : 'About',
      component : 'About',
      index : 1
    },
    {
      name : 'Services',
      component : 'Services',
      index : 2
    },
    {
      name : 'CyberGames',
      component : 'CyberGames',
      index : 3
    }
  ];
  activeLink = 1;

  user = {
    name : 'Isaac NDEMA',
    type : 'Student',
    location : {
      ip : '156.48.253.19',
      country : 'Cameroon',
      latitude : '0.8',
      longitude : '1.08'
    }
  }

  ngOnInit(): void {
  }

  loadPage(index: number):void{
    this.activeLink = index;
  }
}
