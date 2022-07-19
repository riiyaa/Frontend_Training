import {animate, group, keyframes, query, stagger, state, style, transition, trigger, useAnimation} from '@angular/animations';
import { Component } from '@angular/core';
// import { rotateCubeToLeft } from "ngx-router-animations";
import { animations, buildRouteTransition } from "ngx-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [
      //First----------------------------------------------------------------
      // transition('* <=> *', [
      //   query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
      //   group([
      //     query(':enter', [
      //       style({ transform: 'translateX(100%)' }),
      //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      //     ]),
      //     query(':leave', [
      //       style({ transform: 'translateX(0%)' }),
      //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))]),
      //   ])
      // ])
      //Second -----------------------------------------------------------------------------
      // transition('* <=> *', [
      //     query(':enter, :leave', [
      //       style({
      //         position: 'absolute',
      //         left: 0,
      //         width: '100%',
      //       }),
      //     ]),
      //     group([
      //       query(':enter', [
      //         animate('2000ms ease', keyframes([
      //           style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
      //           style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
      //           style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
      //         ])),
      //       ]),
      //       query(':leave', [
      //         animate('2000ms ease', keyframes([
      //           style({ transform: 'scale(1)', offset: 0 }),
      //           style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
      //           style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
      //         ])),
      //       ])
      //     ]),
      //   ])
      //Third------------------------------------------------------------
      // transition( '* => *', [
      //   query(':enter',
      //     [style({ opacity: 0 })
      //     ], { optional: true }),
      //   query(':leave',
      //     [style({ opacity: 1 }),
      //       animate('0.5s', style({ opacity: 0 }))
      //     ], { optional: true }),
      //   query(':enter',
      //     [style({ opacity: 0 }),
      //       animate('0.5s', style({ opacity: 1 }))
      //     ], { optional: true })
      // ])
      // Forth-------------------------------------------------------------------
      // transition('* <=> *', [
      //   query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
      //   group([
      //     query(':enter', [
      //       style({ transform: 'translateX(100%)' }),
      //       animate(
      //         '1.7s ease-in-out',
      //         style({ transform: 'translateX(100%)' })
      //       ),
      //     ]),
      //     query(':leave', [
      //       style({ transform: 'translateX(0%)' }),
      //       animate(
      //         '1.7s ease-in-out',
      //         style({ transform: 'translateX(100%)' })
      //       ),
      //     ]),
      //   ]),
      // ]),
      //Fifth -------------------------------------------------------------------------
      // transition('* => *', useAnimation(rotateCubeToLeft))
      //Sixth----------------------------------------------------------------------------
      buildRouteTransition({
        stateChangeExpr: "form => details",
        enter: animations.zoomInRight(500),
        leave: animations.zoomOutLeft(200)
      }),
      buildRouteTransition({
        stateChangeExpr: "details => form",
        enter: animations.zoomInLeft(500),
        leave: animations.zoomOutRight(200)
      })
    ])
  ],
})
export class AppComponent {
  title = 'ReactiveForm';

  getState(outlet:any) {
    return outlet.activatedRouteData.state;
  }
}
