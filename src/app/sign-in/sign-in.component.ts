import { Component, OnInit } from '@angular/core';
import { TermsComponent } from '../terms/terms.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() : void {
    const dialogRef = this.dialog.open(TermsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
