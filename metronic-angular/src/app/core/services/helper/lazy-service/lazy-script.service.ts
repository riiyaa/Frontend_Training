import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyScriptService {

  constructor() { }

  loadScript(src:string):void{
    const scr = document.createElement('script');
    scr.src = src;
    // console.log('loaded', scr);

    document.querySelector('head')?.appendChild(scr);

  }

  loadAll():void{
    // const scripts = [
    // ]

    // scripts.forEach((item:string) => {
    //   const scr = document.createElement('script');
    // scr.src = item;

    // document.querySelector('head')?.appendChild(scr);
    // })
  }
}
