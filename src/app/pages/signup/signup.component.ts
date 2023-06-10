import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    name: '',
    surname: '',
    email: '',
    phone: ''
  }

  constructor(private userService: UserService, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  formSubmit() {
    if (this.user.username == '' || this.user.username == null) {
      this.snack.open('El nombre de usuario es requerido','Aceptar',{
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
      return;
    }
    
    this.userService.saveUser(this.user)
      .pipe(
        catchError(error => {
          this.snack.open('Ha ocurrido un error en el sistema','Aceptar',{
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
          throw error;
        })
      )
      .subscribe(data => {
        Swal.fire(
          'Usuario registrado',
          'Usuario guardado correctamente en el sistema',
          'success');
      });
  }
}
