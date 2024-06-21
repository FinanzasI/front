import {Component, Inject, OnInit} from '@angular/core';
import {ExcludedUsersService} from "../../services/excluded_users/excluded-users.service";
import {Excluded_users} from "../../models/excluded_users";

@Component({
  selector: 'app-credit-check',
  templateUrl: './credit-check.component.html',
  styleUrls: ['./credit-check.component.css']
})
export class CreditCheckComponent implements OnInit{

  excludedUserDNIs: string[] = [];
  dniInput: string = '';
  message: string = '';

  constructor(private excludedUsersService: ExcludedUsersService) { }

  ngOnInit() {
    this.excludedUsersService.getList().subscribe(
      (data: any[]) => {
        this.excludedUserDNIs = data.map(user => user.dni);
      },
      error => {
        console.error('Error obteniendo datos de usuarios excluidos:', error);
      }
    );
  }

  verificarDNI() {
    console.log('DNI ingresado:', this.dniInput);
    console.log('DNIs excluidos:', this.excludedUserDNIs);

    if (this.excludedUserDNIs.includes(this.dniInput)) {
      this.message = 'El DNI está en la lista de usuarios excluidos.';
    } else {
      this.message = 'El DNI no está en la lista de usuarios excluidos.';
    }
  }
}
