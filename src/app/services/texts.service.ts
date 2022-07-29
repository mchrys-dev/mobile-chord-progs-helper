import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  private texts: any = {
    actions: {
      en: 'Actions',
      fr: 'Actions'
    },
    absoluteChords: {
      en: 'Absolute chords',
      fr: 'Accords absolus'
    },
    appTitle: {
      en: 'Chord progressions helper',
      fr: 'Assistant de progressions d\'accords'
    },
    at: {
      en: 'at',
      fr: 'à'
    },
    chords: {
      en: 'Chords',
      fr: 'Accords'
    },
    createdAt: {
      en: 'Created at',
      fr: 'Créée le'
    },
    createProg: {
      en: 'Create a chord progression',
      fr: 'Créer une progression d\'accords'
    },
    deleteProgText: {
      en: 'Are you shure you want to delete this chord prohgression?',
      fr: 'Êtes-vous sûr(e) de vouloir supprimer cette progression d\'accords?'
    },
    deleteProgTitle: {
      en: 'Delete a chord progression',
      fr: 'Supprimer une progression d\'accords'
    },
    editedAt: {
      en: 'Last edition at',
      fr: 'Dernière modification le'
    },
    key: {
      en: 'Key',
      fr: 'Tonalité'
    },
    lastChordAlert: {
      en: 'For best results, consider ending the chord progression on one of the following chords',
      fr: 'Pour un meilleur résultat, pensez à terminer la progression d\'accords sur un des accords suivants'
    },
    myProgs: {
      en: 'My chord progressions',
      fr: 'Mes progressions d\'accords'
    },
    no: {
      en: 'No',
      fr: 'Non'
    },
    noProgs: {
      en: 'You haven\'t created any chord progressions yet.',
      fr: 'Vous n\'avez pas encore créé des progressions d\'accords.'
    },
    play: {
      en: 'Play',
      fr: 'Jouer'
    },
    relativeChords: {
      en: 'Relative chords',
      fr: 'Accords relatifs'
    },
    scale: {
      en: 'Scale',
      fr: 'Gamme'
    },
    selKey: {
      en: 'Key',
      fr: 'Tonalité'
    },
    selScaleType: {
      en: 'Scale type',
      fr: 'Type de gamme'
    },
    yes: {
      en: 'Yes',
      fr: 'Oui'
    }
  };
  private lang: string = '';

  constructor() { 
    this.lang = navigator.language.split('-')[0];
  }

  public getLang() {
    return this.lang;
  }

  public getText(key: string): string {
    return this.texts[key][this.lang];
  }
}

