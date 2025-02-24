import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input()
  message = "cc je n'ai encore rien reçu";
  @Output()
  sendMessageToPapa = new EventEmitter<string>();

  onSendMessageTodPapa() {
    this.sendMessageToPapa.emit("Salut Papa :D");
  }
}
