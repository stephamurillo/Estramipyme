import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  private apiUser=inject(UserService)
  private router=inject(Router);

 name= new FormControl('');
 email= new FormControl('');
 passw= new FormControl('');
 passwc= new FormControl('');

 dataUsuario:any ={};

  regiu() {
    this.dataUsuario = {
      "Nombre": this.name.value,
      "Email": this.email.value,
      "contrana": this.passw.value,
      "avatar": "foto de perfil"

    }
    this.apiUser.registerUser(this.dataUsuario).subscribe(
      data => {
        console.log(data);
        alert("Registro exitoso");
        this.router.navigate(['/inicio'])
      }

    )

  }


}
