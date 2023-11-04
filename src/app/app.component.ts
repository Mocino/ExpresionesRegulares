import { Component } from '@angular/core';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      // dpi: ['', [Validators.required, Validators.pattern(/^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/)]],
      // email: ['', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]],
      // phone: ['', [Validators.required, Validators.pattern(/^502\s\d{8}$/)]],
      expresion1: ['', [Validators.required, Validators.pattern(/^[A-Ja-j]-\d{8}$/)]],
      expresion2: ['', [Validators.required, Validators.pattern(/^[2-9][0-9]{2}-[0-9]{3}-[0-9]{4}$/)]]
    });
  }
}
