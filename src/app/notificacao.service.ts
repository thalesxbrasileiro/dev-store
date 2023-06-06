import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  notificar(message: string) {
    this._snackBar.open(message, "Ok", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"      
    });
  }
  
}
