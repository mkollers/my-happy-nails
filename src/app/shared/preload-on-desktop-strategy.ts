import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PreloadOnDesktopStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        const userAgent = navigator.userAgent;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent)) {
            return of(null);
        }
        return load();
    }
}