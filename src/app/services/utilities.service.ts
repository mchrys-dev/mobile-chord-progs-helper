import { Injectable } from '@angular/core';
import { TextsService } from './texts.service';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private textsService: TextsService) { }

  public dateTimeFromTimestamp(timestamp: number) {
    let dateTime = new Date(timestamp);

    return `${dateTime.toLocaleDateString()} ${this.textsService.getText('at')} ${dateTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`;
  }
}
