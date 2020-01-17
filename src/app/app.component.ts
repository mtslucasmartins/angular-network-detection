import { Component } from '@angular/core';
import { NetworkDetectionService } from './shared/network-detection/network-detection.service';
import { Observable, merge, fromEvent, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'network-detection';

  public online: boolean;

  constructor(private networkDetectionService: NetworkDetectionService) {
    networkDetectionService.monitor().subscribe((e) => {
      console.log(e);
      this.online = e.hasNetworkConnection && e.hasInternetAccess;
    });
  }

}
