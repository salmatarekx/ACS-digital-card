import { Component } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText: string = '';
  qrData: string = '';

  generateQRCode() {
    if (this.inputText.trim()) {
      QRCode.toDataURL(this.inputText)
        .then(url => {
          this.qrData = url;
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      alert('Please enter some text');
    }
  }
}
