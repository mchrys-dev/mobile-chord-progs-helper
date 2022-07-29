import { Component, OnInit } from '@angular/core';
import { AdmobService } from 'src/app/services/admob.service';
import { TextsService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public textsService: TextsService,
    private admobService: AdmobService
  ) { }

  ngOnInit(): void {
    this.admobService.showBanner();
  }

}
