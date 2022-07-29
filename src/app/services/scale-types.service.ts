import { Injectable } from '@angular/core';
import { ChordsService } from './chords.service';

@Injectable({
  providedIn: 'root'
})
export class ScaleTypesService {

  private scaleTypes: any = [
    {
      id: 1,
      name: {
        en: 'Major',
        fr: 'Majeur'
      },
      lastChordIds: [1, 5, 6],
      inLite: true
    },
    {
      id: 2,
      name: {
        en: 'Harmonic minor',
        fr: 'Mineur harmonique'
      },
      lastChordIds: [1, 5, 6],
      inLite: false
    },
    {
      id: 3,
      name: {
        en: 'Dorian',
        fr: 'Dorien (mode de ré)'
      },
      lastChordIds: [1, 4, 7],
      inLite: false
    },
    {
      id: 4,
      name: {
        en: 'Phrygian',
        fr: 'Phrygien (mode de mi)'
      },
      lastChordIds: [1, 4, 7],
      inLite: false
    },
    {
      id: 5,
      name: {
        en: 'Mixolydian',
        fr: 'Mixolydien (mode de sol)'
      },
      lastChordIds: [1, 4, 7],
      inLite: false
    },
    {
      id: 6,
      name: {
        en: 'Aeolian',
        fr: 'Aeolien (mode de la)'
      },
      lastChordIds: [1, 5, 6, 7],
      inLite: false
    },
  ];

  constructor(private chordsService: ChordsService) { }

  public getAll() {
    return this.scaleTypes;
  }

  public findOne(id: number) {
    return this.scaleTypes.find((scaleType: any) => scaleType.id === id);
  }

  public getLastChords(selScaleTypeId: number) {
    let lastChords: any = [];

    this.findOne(selScaleTypeId).lastChordIds.forEach((id: number) => {
      lastChords.push(this.chordsService.find(id));
    });

    return lastChords;
  }

  public isLastChordOk(selScaleTypeId: number, lastChordId: number): boolean {
    let isOk: boolean = false;

    if(this.findOne(selScaleTypeId).lastChordIds.includes(lastChordId)) {
      isOk = true;
    }

    return isOk;
  }
}

