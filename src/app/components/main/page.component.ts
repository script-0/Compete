import { Component,OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';


@Component({
  selector: '',
  template: `<div></div>`,
  styleUrls: []
})

export class PageComponent implements OnInit{
    ngOnInit(): void {
    }

    env= environment;
    available_games:any|null;
    your_games:any|null;
    team : any|null;

    compete = (event : Event) : boolean =>{
      return false;
    }
}