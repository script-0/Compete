import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-account-popup',
  templateUrl: './account-popup.component.html',
  styleUrls: ['./account-popup.component.css']
})
export class AccountPopupComponent implements OnInit {

  @Input() username! :  string;
  @Input() img! : string;
  @Input() manageAccount!: ()=> void;
  @Input() changeAccount!: ()=> void;
  @Input() logout!: ()=> void;
  
  constructor() { }

  ngOnInit(): void {
  }

}
