import { Component, OnInit } from '@angular/core';
import { TermsComponent } from '../terms/terms.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quick-link',
  templateUrl: './quick-link.component.html',
  styleUrls: ['./quick-link.component.css']
})
export class QuickLinkComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(toDisplay:string) : void {
    const dialogRef = this.dialog.open(TermsComponent ,{
      data:{
        toDisplay : toDisplay
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
