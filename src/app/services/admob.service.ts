import { Injectable } from '@angular/core';
import { AdMobPlus, BannerAd } from '@admob-plus/capacitor';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  constructor() { }

  public showBanner() {
    (async () => {
      const banner = new BannerAd({
        adUnitId: 'ca-app-pub-3541683453460725/6489056610',
      });
      await banner.show();
    
      // AdMobPlus.addListener('banner.impression', async () => {
      //   await banner.hide()
      // })
    })();
  }
}
