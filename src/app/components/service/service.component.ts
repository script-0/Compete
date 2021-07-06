import { Component} from '@angular/core';
import { PageComponent } from '../main/page.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent extends PageComponent {

  constructor() { 
    super();
  }
  
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
