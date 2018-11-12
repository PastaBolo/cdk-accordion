import { trigger, state, style, transition, animate } from '@angular/animations'

export const expansionAnimation = trigger('expansion', [
  state('open', style({ height: '*' })),
  state('close', style({ height: 0 })),
  transition('open <=> close', animate('225ms cubic-bezier(0.4,0.0,0.2,1)'))
])
