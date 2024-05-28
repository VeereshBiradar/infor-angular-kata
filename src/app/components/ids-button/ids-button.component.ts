import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ids-button',
  templateUrl: './ids-button.component.html',
  styleUrls: ['./ids-button.component.scss']
})
export class IdsButtonComponent {

  buttonText: string = 'Error Example';

  @Output() openModalEvent = new EventEmitter<void>();

  openModal() {
    this.openModalEvent.emit(); 
  }
  


}
