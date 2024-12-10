import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  //styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent {
  requestResetForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.requestResetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.requestResetForm.valid) {
      const email = this.requestResetForm.value.email;
      console.log('Solicitud de enlace enviada a:', email);
      // Aquí llamas al servicio que envía el enlace al correo
    }
  }
}
