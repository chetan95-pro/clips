import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService], //Component level service injection
})
export class ModalComponent implements OnInit {
  // parent to child communication for unique modal id for hidden or closing modal
  @Input() modalID = '';

  constructor(public modal: ModalService, public el:ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal() {
    this.modal.toggleModal(this.modalID); //provide closing modalId refernce.
  }
}
