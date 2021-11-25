import { Component, OnInit, Input } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-alert',
  templateUrl: './snackbar-alert.component.html',
  styleUrls: ['./snackbar-alert.component.css']
})
export class SnackbarAlertComponent implements OnInit {
  @Input() message: string = ''
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  share() {
    this.snackBar.open(this.message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2500,
      panelClass: ['mat-toolbar', 'mat-accent']
    });
  }
}
