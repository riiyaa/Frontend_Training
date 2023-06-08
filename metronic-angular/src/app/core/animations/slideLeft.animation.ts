import {animate, style, transition, trigger} from "@angular/animations";

export const slideLeft = trigger("slideLeft", [
    transition(":enter", [
      style({ left: "-100%" }),
      animate("500ms ease", style({ left: 0 })),
    ]),
    transition(":leave", [
      style({ left: 0 }),
      animate("500ms ease", style({ left: "-100%" })),
    ]),
]);


export const slideRight = trigger("slideRight", [
  transition(":enter", [
    style({ right: "-100%" }),
    animate("500ms ease", style({ right: 0 })),
  ]),
  transition(":leave", [
    style({ right: 0 }),
    animate("500ms ease", style({ right: "-100%" })),
  ]),
]);
