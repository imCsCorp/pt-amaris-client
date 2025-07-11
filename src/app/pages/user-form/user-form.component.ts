import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      balance: [500000, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.api.createUser(this.userForm.value).subscribe({
        next: () => alert('✅ Usuario creado correctamente'),
        error: () => alert('❌ Error al crear usuario'),
      });
    } else {
      this.userForm.markAllAsTouched(); // 👈 Marca todo como tocado
    }
  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  get balance() {
    return this.userForm.get('balance');
  }
}
