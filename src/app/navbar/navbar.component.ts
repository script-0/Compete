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

  ngOnInit(): void {
  }

  loadPage(index: number):void{
    this.activeLink = index;
  }
}
