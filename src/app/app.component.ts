import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'message-dialog-kata';
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }
}
