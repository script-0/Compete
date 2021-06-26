import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  team = [
    {
      name  : 'Isaac NDEMA',
      img   : 'https://metactf.com/assets/img/roman.png',
      desc  : 'Chief Executive Officer',
      links : {
        twitter   :  '#',
        linkedin  :  '#',
        mail      :  '#'
      }
    },
    {
      name  : 'Isaac NDEMA',
      img   : 'https://metactf.com/assets/img/roman.png',
      desc  : 'Chief Executive Officer',
      links : {
        twitter   :  '#',
        linkedin  :  '#',
        mail      :  '#'
      }
    },
    {
      name  : 'Isaac NDEMA',
      img   : 'https://metactf.com/assets/img/roman.png',
      desc  : 'Chief Executive Officer',
      links : {
        twitter   :  '#',
        linkedin  :  '#',
        mail      :  '#'
      }
    },
    {
      name  : 'Isaac NDEMA',
      img   : 'https://metactf.com/assets/img/roman.png',
      desc  : 'Chief Executive Officer',
      links : {
        twitter   :  '#',
        linkedin  :  '#',
        mail      :  '#'
      }
    }
  ]
  
  ngOnInit(): void {
  }

}
