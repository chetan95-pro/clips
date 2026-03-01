import { Injectable } from '@angular/core';

// creating interface because provide unique id and visible property for multiple modals so we can multiple modal
interface IModal {
  id: string;
  visible: boolean;
}
//global level service injecting
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  //declare modal property for multiple modals
  private modals: IModal[] = [];

  constructor() {}

  //Register method for checking unique id like ('auth' - which declare inside the auth-modal.ts file for opening perticuler modals.)
  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  //unRegister method for avoid memory leaks in application
  unRegister(id: string) {
    this.modals = this.modals.filter((element) => element.id !== id);
  }

  //modal opening of finding the unique id element and visiblity with !! negation formate.
  isModalOpen(id: string): boolean {
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  //ToggleModal opening of finding the unique id element and visiblity
  toggleModal(id: string) {
    const modal = this.modals.find((element) => element.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }
    // return (this.visible = !this.visible);
  }
}
