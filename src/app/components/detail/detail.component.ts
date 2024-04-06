import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
constructor(@Inject(MAT_DIALOG_DATA) private dialogDate:MatDialogRef<any>, private matDialog:MatDialogRef<any>){}
res:any

ngOnInit(): void {
  this.res = this.dialogDate
}


closeModal(){
  this.matDialog.close(true);
}
}
