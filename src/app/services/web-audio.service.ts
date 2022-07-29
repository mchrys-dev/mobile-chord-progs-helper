import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebAudioService {

  Cb: any = null;
  C: any = null;
  Cm: any = null;
  Csharpm: any = null;
  Db: any = null;
  Dbm: any = null;
  D: any = null;
  Dm: any = null;
  Dsharpm: any = null;
  Eb: any = null;
  Ebm: any = null;
  E: any = null;
  Fb: any = null;
  Em: any = null;
  F: any = null;
  Fm: any = null;
  Fsharp: any = null;
  Fsharpm: any = null;
  Gb: any = null;
  G: any = null;
  Gm: any = null;
  Gsharpm: any = null;
  Ab: any = null;
  Abm: any = null;
  A: any = null;
  Am: any = null;
  Bb: any = null;
  Bbm: any = null;
  B: any = null;
  Bm: any = null;

  sounds: any[] = [
    'Cb', 'C', 'Cm', 'Csharpm', 'Db', 'Dbm', 'D', 'Dm', 'Dsharpm', 'Eb', 'Ebm', 'E', 'Em', 'Fb', 'F', 'Fm', 
    'Fsharp', 'Fsharpm', 'Gb', 'G', 'Gm', 'Gsharpm', 'Ab', 'Abm', 'A', 'Am', 'Bb', 'Bbm', 'B', 'Bm'
  ];
  buffer: any = null;
  audioCtx = new AudioContext();

  sources: any[] = [];

  constructor() { 
    this.sounds.forEach(function(this: any, soundName: any) {
      this.loadSound(this.audioCtx, this.buffer, soundName);
    }.bind(this));
  }

  loadSound(this: any, audioCtx: any, buffer: any, bufferName: any) {
    const request = new XMLHttpRequest();
    request.open("GET", "assets/sounds/" + bufferName + ".mp3");
    request.responseType = "arraybuffer";
    request.onload = function(this: any) {
      let undecodedAudio = request.response;
      audioCtx.decodeAudioData(undecodedAudio, (data: any) => {
        buffer = data;
        this.setSoundReady(buffer, bufferName);
      });
    }.bind(this);
    request.send();
  }

  setSoundReady(this: any, buffer: any, bufferName: any) {
    this[bufferName] = buffer;
  }

  play(buffer: any, time: any) {
    const source = this.audioCtx.createBufferSource();
    source.buffer = buffer;

    this.sources.push(source);
    console.log(this.sources);

    source.connect(this.audioCtx.destination);
    source.start(this.audioCtx.currentTime + time);
  };

  stopAll() {
    this.sources.forEach(function(source) {
      source.stop();
    });
  }
}

