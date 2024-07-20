import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { error } from 'console';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   private apiUser= inject(UserService);
   private navega =inject(Router);

 


correoC = new FormControl('');
contrasenaC =new FormControl('');
datauser ={};


inicioUsuario(){
   this.datauser = {
  "email":this.correoC.value,
  "password":this.contrasenaC.value
   }
   
   this.apiUser.authUser(this.datauser).subscribe(
    data=> {
      console.log(data);
      alert("Bienvenido(a)");
      localStorage.setItem('tokenUserPrueba',data.access_token);
      this.navega.navigate(['/inicio']);
    },(error)=>{
      console.error('error de auteticacion',error)
      if (error.status==401){
        alert("Error en sus credenciales,intente nuevamente");
        this.navega.navigate(['/inicio'])
      }
    }
    
   )




  }

}
