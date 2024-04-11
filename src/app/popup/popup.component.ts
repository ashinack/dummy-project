import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  dummyArray: any[] = [
    { id: 1, name: 'Ashina' },
    { id: 2, name: 'Akshay' },
    { id: 3, name: 'riya' },
  ];

  constructor(public dialogRef: MatDialogRef<PopupComponent>) {}

  closeDialog(data: any) {
    console.log('ppp');

    this.dialogRef.close(data);
  }
  // closeDialog2() {
  //   console.log('ppp');

  //   this.dialogRef.close();
  // }
}
