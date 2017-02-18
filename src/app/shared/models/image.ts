import { SafeResourceUrl } from '@angular/platform-browser';

export interface Image {
    height: number;
    source: string | SafeResourceUrl;
    width: number;
}
