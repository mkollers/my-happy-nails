import { animate, state, style, transition, trigger } from '@angular/core';

export function RouterTransition() {
    return slideToLeft();
}

function slideToLeft() {
    return trigger('routerTransition', [
        state('void', style({ width: '100%', position: 'absolute' })),
        state('*', style({ width: '100%', position: 'absolute' })),
        transition(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}