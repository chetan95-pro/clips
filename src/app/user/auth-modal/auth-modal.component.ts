// src/app/user/auth-modal/auth-modal.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {
    //create Id based auth-modal opening - Like when multiple modal simultaneously open so to avoid this issue we create the separate method giving unique id parameters and we will open modal with this unique id.
    this.modal.register('auth');
  }

  ngOnDestroy(): void {
    //Avoiding memory leakage issue for unregistering the modal component for authentication modal
    this.modal.unRegister('auth');
  }
}
