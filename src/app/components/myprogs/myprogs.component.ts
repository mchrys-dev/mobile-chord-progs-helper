import { Component, OnInit } from '@angular/core';
import { AdmobService } from 'src/app/services/admob.service';
import { ChordsService } from 'src/app/services/chords.service';
import { KeysService } from 'src/app/services/keys.service';
import { ScaleTypesService } from 'src/app/services/scale-types.service';
import { StorageService } from 'src/app/services/storage.service';
import { TextsService } from 'src/app/services/texts.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-myprogs',
  templateUrl: './myprogs.component.html',
  styleUrls: ['./myprogs.component.scss']
})
export class MyprogsComponent implements OnInit {

  public myProgs: any = [];
  public idProgToDelete: number = 0;

  constructor(
    public textsService: TextsService,
    public storageService: StorageService,
    public chordsService: ChordsService,
    public scaleTypesService: ScaleTypesService,
    public keysService: KeysService,
    public utilitiesService: UtilitiesService
  ) { }

  ngOnInit(): void {
    
    this.myProgs = this.storageService.loadProgs();
  }

  public setIdProgToDelete(id: number) {
    this.idProgToDelete = id;
  }

  public deleteProg() {
    this.myProgs = this.myProgs.filter((prog: any) => prog.id !== this.idProgToDelete);
    this.storageService.saveProgs(this.myProgs);
  }

}
