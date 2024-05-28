import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-ids-message-dialog',
  templateUrl: './ids-message-dialog.component.html',
  styleUrls: ['./ids-message-dialog.component.scss']
})
export class IdsMessageDialogComponent {

  @Input() showModal: boolean = false;
  
  title: string = 'Lost connection';

  modalText: string = 'This application has experienced a system error due to the lack of internet access';
  modalSubText: string = 'Please restart the application in order to proceed.';

  buttonText: string = 'Restart Button';

  closeModal() {
    this.showModal = false;
  }
  
}
