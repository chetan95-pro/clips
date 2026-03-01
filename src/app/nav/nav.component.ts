// src/app/nav/nav.component.ts
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}

  //open modal 
  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggleModal('auth'); //Toggle modal of 'auth' unique id which open login modal only
  }
}
