import { OnInit } from '@angular/core';
import { Component} from '@angular/core';

@Component({
  selector: '',
  template: `<div></div>`,
  styleUrls: []
})
export class PageComponent implements OnInit{
    ngOnInit(): void {
    }

    available_games:any|null;
    your_games:any|null;
    team : any|null;
}