import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChordsService {

  private chords: any = [
    {
      id: 0,
      name: {
        1: '?',
        2: '?',
        3: '?',
        4: '?',
        5: '?',
        6: '?'
      },
      nextChordIds: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
      },
      inLite: true
    },
    {
      id: 1,
      name: {
        1: 'I',
        2: 'i',
        3: 'i',
        4: 'i',
        5: 'I',
        6: 'i'
      },
      nextChordIds: {
        1: [0, 2, 3, 4, 5, 6],
        2: [0, 4, 5, 6],
        3: [0, 3, 4, 5, 7],
        4: [0, 2, 3, 4, 6, 7],
        5: [0, 2, 4, 5, 6, 7],
        6: [0, 3, 4, 5, 6, 7]
      },
      inLite: true
    },
    {
      id: 2,
      name: {
        1: 'ii',
        2: '',
        3: '',
        4: 'bII',
        5: 'ii'
      },
      nextChordIds: {
        1: [0, 5],
        4: [0, 1, 4, 6, 7],
        5: [0, 6, 7]
      },
      inLite: true
    },
    {
      id: 3,
      name: {
        1: 'iii',
        2: '',
        3: 'bIII',
        4: 'bIII',
        6: 'bIII'
      },
      nextChordIds: {
        1: [0, 4, 6],
        2: [],
        3: [0, 4, 5, 7],
        4: [0, 4, 6, 7],
        6: [0, 4, 5, 6, 7]
      },
      inLite: true
    },
    {
      id: 4,
      name: {
        1: 'IV',
        2: 'iv',
        3: 'IV',
        4: 'iv',
        5: 'IV',
        6: 'iv'
      },
      nextChordIds: {
        1: [0, 1, 2, 5],
        2: [0, 1, 5],
        3: [0, 1, 5, 7],
        4: [0, 1, 2, 7],
        5: [0, 1, 2, 7],
        6: [0, 1, 5, 6, 7]
      },
      inLite: true
    },
    {
      id: 5,
      name: {
        1: 'V',
        2: 'V',
        3: 'v',
        4: 'v',
        5: 'V',
        6: 'v'
      },
      nextChordIds: {
        1: [0, 1, 6],
        2: [0, 1, 6],
        3: [0, 1, 4, 7],
        4: [],
        5: [0, 1, 7],
        6: [0, 1, 4, 6, 7]
      },
      inLite: true
    },
    {
      id: 6,
      name: {
        1: 'vi',
        2: 'bVI',
        3: '',
        4: 'bVI',
        5: 'vi',
        6: 'bVI'
      },
      nextChordIds: {
        1: [0, 2, 4, 5],
        2: [0, 4, 5],
        3: [],
        4: [0, 2, 4, 7],
        5: [0, 2, 4, 7],
        6: [0, 4, 5, 7]
      },
      inLite: true
    },
    {
      id: 7,
      name: {
        1: '',
        2: '',
        3: 'bVII',
        4: 'bvii',
        5: 'bVII',
        6: 'bVII'
      },
      nextChordIds: {
        3: [0, 1, 3, 4, 5],
        4: [0, 1, 2, 4, 6],
        5: [0, 1, 4],
        6: [0, 1, 4, 5]
      },
      inLite: true
    }
  ]

  constructor() { }

  public getAll() {
    return this.chords;
  }

  public find(id: number) {
    return this.chords.find((chord: any) => chord.id === id);
  }

  public findNextChords(id: number, scaleType: number) {
    let nextChords: any = [];
    let currChord = this.find(id);

    currChord.nextChordIds[scaleType].forEach((nextChordId: number) => {
      nextChords.push(this.find(nextChordId));
    });

    return nextChords;
  }

  public findProgsChords(ids: any) {
    let chords: any = [];

    ids.forEach((id: number) => {
      let chord = this.find(id);
      chords.push(chord);
    });

    return chords;
  }

  public progsChordStr(prog: any) {
    let str: string = '';

    this.findProgsChords(prog.chordIds).forEach((chord: any) => {
      if(chord.id !== 0) {
        str += `${chord.name[prog.selScaleTypeId]} `;
      }
    });

    return str;
  }
}

