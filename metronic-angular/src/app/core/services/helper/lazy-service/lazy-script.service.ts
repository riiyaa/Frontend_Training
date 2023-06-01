import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyScriptService {

  constructor() { }

  loadScript(src:string):void{
    const scr = document.createElement('script');
    scr.src = src;
    console.log('loaded', scr);
    
    document.querySelector('head')?.appendChild(scr);

  }

  loadAll():void{
    const scripts = [
      "../../assets/vendors/js/vendor.bundle.base.js",
      "../../assets/js/off-canvas.js",
      "../../assets/js/hoverable-collapse.js",
      "../../assets/js/misc.js",
      "../../assets/js/todolist.js",
      "../../assets/js/dashboard.js",
      "../../assets/js/jquery.cookie.js",
      "../../assets/vendors/chart.js/Chart.min.js"
    ]

    scripts.forEach((item:string) => {
      const scr = document.createElement('script');
    scr.src = item;
    
    document.querySelector('head')?.appendChild(scr);
    })
  }
}
