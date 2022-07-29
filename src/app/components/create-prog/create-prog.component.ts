import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
 
import { ChordsService } from 'src/app/services/chords.service';
import { KeysService } from 'src/app/services/keys.service';
import { ScaleTypesService } from 'src/app/services/scale-types.service';
import { TextsService } from 'src/app/services/texts.service';
import { WebAudioService } from 'src/app/services/web-audio.service';
import { AdmobService } from 'src/app/services/admob.service';

@Component({
  selector: 'app-create-prog',
  templateUrl: './create-prog.component.html',
  styleUrls: ['./create-prog.component.scss']
})
export class CreateProgComponent implements OnInit {

  public myProgs: any = [];
  public prog: any = [];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    public textsService: TextsService,
    public chordsService: ChordsService,
    public keysService: KeysService,
    public scaleTypesService: ScaleTypesService,
    private webAudioService: WebAudioService
  ) { }

  ngOnInit(): void {
    // localStorage.clear();
    this.loadProgs();
    // S'il s'agit d'une nouvelle progression d'accords
    if(this.location.path() === '/create-prog') {
      this.prog = {
        id: Date.now(),
        editedAt: Date.now(),
        selKeyId: 1,
        selScaleTypeId: 1,
        chordIds: [1, 0, 0, 0, 0],
        selectsDisabled: [false, true, true, true]
      };  
      this.myProgs.push(this.prog);
      this.saveProgs();
    } else {
      let id = this.route.snapshot.paramMap.get('id');
      this.prog = this.myProgs.find((prog: any) => prog.id == id);
    }
    
    console.log(this.location.path() === '/create-prog');
 
  }

  public initProg() {
    this.prog.chordIds = [1, 0, 0, 0, 0];
    this.updateMyProgs();
  }

  public updateMyProgs() {
    this.prog.editedAt = Date.now();
    let currProg = this.myProgs.find((prog: any) => prog.id === this.prog.id);
    currProg = this.prog;
    this.saveProgs();
  }

  private loadProgs(): void {
    if(localStorage.getItem('myProgs') !== null) {
      this.myProgs = JSON.parse(localStorage.getItem('myProgs')!);
      console.log(this.myProgs);
    }
  }

  private saveProgs(): void {
    localStorage.setItem('myProgs', JSON.stringify(this.myProgs));
    console.log(JSON.parse(localStorage.getItem('myProgs')!));
  }

  public chordChanged(index: number) {
    for(let i=index+1; i<4; i++) {
      this.prog.selectsDisabled[i] = true;
      this.prog.chordIds[i+1] = 0;
    }

    if(this.prog.chordIds[index+1] !== 0) {
      this.prog.selectsDisabled[index+1] = false;
      for(let i=index+2; i<4; i++) {
        this.prog.selectsDisabled[i] = true;
      }
    }

    this.updateMyProgs();
  }

  public playPhrase(this: any) {
    // On arrête toutes les sources actives
    this.webAudioService.stopAll();
    // On réinitialise l'array de sources
    this.webAudioService.sources = [];
    // On joue chaque source
    this.prog.chordIds.forEach(function(this: any, id: number, index: any) {
      this.webAudioService.play(this.webAudioService[this.keysService.find(this.prog.selKeyId)[this.chordsService.find(this.prog.chordIds[index]).name[this.prog.selScaleTypeId]]], 1.5*index);
    }.bind(this));
    // this.webAudioService.play(this.webAudioService[this.keys[0][this.phrasesChords[0].name]], 0);
    // this.webAudioService.play(this.webAudioService[this.keys[0][this.phrasesChords[1].name]], 1.5);
  }

}
