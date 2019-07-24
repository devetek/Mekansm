import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    public title = 'Mekansm';
    // tslint:disable-next-line: max-line-length
    public description = 'Used to help teams last longer during team fights and pushes because of its powerful healing ability along with its regeneration and armor aura.';

    public setTitle(title: string) {
        this.title = title;
    }
}
