import { Component } from '@angular/core';
import { NetworkDetectionService } from './shared/network-detection/network-detection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'network-detection';

  constructor(private networkDetectionService: NetworkDetectionService) {
    networkDetectionService.monitor().subscribe((e) => {
      console.log(e);

    });
  }

}
