import { SeoEffectsService } from './seo-effects.service';
import { FacebookEffectsService } from './facebook-effects.service';
import { EffectsModule } from '@ngrx/effects';

export const Effects = [
    EffectsModule.run(FacebookEffectsService),
    EffectsModule.run(SeoEffectsService)
];
