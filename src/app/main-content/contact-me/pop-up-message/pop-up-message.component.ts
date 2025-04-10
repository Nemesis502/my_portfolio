import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-message',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-message.component.html',
  styleUrl: './pop-up-message.component.scss'
})
export class PopUpMessageComponent {

  @Output()closeMessage = new EventEmitter<boolean>();

  closeDialog(){
    this.closeMessage.emit(false)
  }
}
