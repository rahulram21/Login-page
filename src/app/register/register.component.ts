import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
    this.signupForm = formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  errorMessage: string | null = null;

  onSubmit(): void{
    const formValue = this.signupForm.value;
    console.log(formValue);
    this.authService.register(formValue.email, formValue.username, formValue.password).subscribe({
      next: ()=>{
        alert("Sign up successful")
        setTimeout(()=>{
          this.router.navigateByUrl('/login');
        }, 2000)
      },
      error: (err)=>{
        this.errorMessage = err.code;
      }
    }
  )
  }

}
