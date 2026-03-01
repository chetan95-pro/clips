// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../services/modal.service';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [ModalComponent, TabContainerComponent, TabComponent],
  imports: [CommonModule],
  exports: [ModalComponent, TabComponent, TabContainerComponent],
  // providers: [ModalService], //module level service injecting
})
export class SharedModule {}
