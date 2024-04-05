import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) private data:any,private dialog:MatDialogRef<any>){}


  price = 0
  ngOnInit(): void {
    this.price = this.data
    this.dialog.backdropClick().subscribe(() => {
      this.dialog.close('hello')
    })
  }

  c(){

    
  }
}
