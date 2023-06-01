import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LazyScriptService } from 'src/app/core/services/helper/lazy-service/lazy-script.service';
import {AuthService} from "../../core/services/helper/auth/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private lzService:LazyScriptService, public router: Router, private auth:AuthService){}


  ngOnInit(): void {
    this.lzService.loadAll();
  }

  handleLogin(email: string, password: string){
    if(this.auth.login(email, password)){
      this.router.navigate(['pages']);
      // Swal.fire({
      //   text: "Successfully logged in.",
      //   icon: "success",
      //   position: "top-end",
      //   toast: true,
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    }
    else{
      // Swal.fire({
      //   text: "Wrong Credentials.",
      //   icon: "error",
      //   position: "top-end",
      //   toast: true,
      //   showConfirmButton: false,
      //   timer: 2000,
      // });
    }
  }


}
