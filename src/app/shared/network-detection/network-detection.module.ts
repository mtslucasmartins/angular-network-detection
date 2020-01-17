import { NgModule } from '@angular/core';
import { NetworkDetectionService } from './network-detection.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [NetworkDetectionService]
})
export class NetworkDetectionModule {
}
