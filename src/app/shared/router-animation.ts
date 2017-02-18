import { animate, state, style, transition, trigger } from '@angular/core';

export function RouterTransition() {
    return slideToLeft();
}

export function slideToLeft() {
    return trigger('routerTransition', [
        transition('void => *', [
            style({ position: 'absolute', width: '100%', height: '100%', transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition('* => void', [
            style({ position: 'absolute', width: '100%', height: '100%', transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
