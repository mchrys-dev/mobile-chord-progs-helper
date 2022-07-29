import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  private keys: any = [
    {
      id: 1,
      inLite: true,
      '?': '?',
      I: 'C',
      i: 'Cm',
      bII: 'Db',
      ii: 'Dm',
      bIII: 'Eb',
      iii: 'Em',
      IV: 'F',
      iv: 'Fm',
      V: 'G',
      v: 'Gm',
      vi: 'Am',
      bVI: 'Ab',
      bVII: 'Bb',
      bvii: 'Bbm'
    },
    {
      id: 2,
      inLite: true,
      '?': '?',
      I: 'D',
      i: 'Dm',
      bII: 'Eb',
      ii: 'Em',
      bIII: 'F',
      iii: 'Fsharpm',
      IV: 'G',
      iv: 'Gm',
      V: 'A',
      v: 'Am',
      vi: 'Bm',
      bVI: 'Bb',
      bVII: 'C',
      bvii: 'Cm'
    },
    {
      id: 3,
      inLite: true,
      '?': '?',
      I: 'Eb',
      i: 'Ebm',
      bII: 'Fb',
      ii: 'Fm',
      bIII: 'Gb',
      iii: 'Gm',
      IV: 'Ab',
      iv: 'Abm',
      V: 'Bb',
      v: 'Bbm',
      vi: 'Cm',
      bVI: 'Cb',
      bVII: 'Db',
      bvii: 'Dbm'
    },
    {
      id: 4,
      inLite: false,
      '?': '?',
      I: 'E',
      i: 'Em',
      bII: 'F',
      ii: 'Fsharpm',
      bIII: 'G',
      iii: 'Gsharpm',
      IV: 'A',
      iv: 'Am',
      V: 'B',
      v: 'Bm',
      vi: 'Csharpm',
      bVI: 'C',
      bVII: 'D',
      bvii: 'Dm'
    },
    {
      id: 5,
      inLite: false,
      '?': '?',
      I: 'F',
      i: 'Fm',
      bII: 'Gb',
      ii: 'Gm',
      bIII: 'Ab',
      iii: 'Am',
      IV: 'Bb',
      iv: 'Bbm',
      V: 'C',
      v: 'Cm',
      vi: 'Dm',
      bVI: 'Db',
      bVII: 'Eb',
      bvii: 'Ebm'
    },
    {
      id: 7,
      inLite: false,
      '?': '?',
      I: 'G',
      i: 'Gm',
      bII: 'Ab',
      ii: 'Am',
      bIII: 'Bb',
      iii: 'Bm',
      IV: 'C',
      iv: 'Cm',
      V: 'D',
      v: 'Dm',
      vi: 'Em',
      bVI: 'Eb',
      bVII: 'F',
      bvii: 'Fm'
    },
    {
      id: 8,
      inLite: false,
      '?': '?',
      I: 'A',
      i: 'Am',
      bII: 'Bb',
      ii: 'Bm',
      bIII: 'C',
      iii: 'Csharpm',
      IV: 'D',
      iv: 'Dm',
      V: 'E',
      v: 'Em',
      vi: 'Fsharpm',
      bVI: 'F',
      bVII: 'G',
      bvii: 'Gm'
    },
    {
      id: 9,
      inLite: false,
      '?': '?',
      I: 'Bb',
      i: 'Bbm',
      bII: 'Cb',
      ii: 'Cm',
      bIII: 'Db',
      iii: 'Dm',
      IV: 'Eb',
      iv: 'Ebm',
      V: 'F',
      v: 'Fm',
      vi: 'Gm',
      bVI: 'Gb',
      bVII: 'Ab',
      bvii: 'Abm'
    },
    {
      id: 10,
      inLite: false,
      '?': '?',
      I: 'B',
      i: 'Bm',
      bII: 'C',
      ii: 'Csharpm',
      bIII: 'D',
      iii: 'Dsharpm',
      IV: 'E',
      iv: 'Em',
      V: 'Fsharp',
      v: 'Fsharpm',
      vi: 'Gsharpm',
      bVI: 'G',
      bVII: 'A',
      bvii: 'Am'
    }
  ];

  constructor() { }

  public getAll() {
    return this.keys;
  }

  public find(id: number) {
    return this.keys.find((key: any) => key.id === id);
  }
}

