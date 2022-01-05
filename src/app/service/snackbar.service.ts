import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar() {
    this._snackBar.open('Product Added', 'Dismiss', {
      // duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['blue-snackbar'],
    });
  }
}
