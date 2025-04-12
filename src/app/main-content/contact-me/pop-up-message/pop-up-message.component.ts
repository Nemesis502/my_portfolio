import { Component, EventEmitter, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-pop-up-message',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './pop-up-message.component.html',
  styleUrl: './pop-up-message.component.scss'
})
export class PopUpMessageComponent {

  @Output()closeMessage = new EventEmitter<boolean>();

  closeDialog(){
    this.closeMessage.emit(false)
  }
}
