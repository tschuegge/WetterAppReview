import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wetter } from '../models/wetter';

@Injectable({
providedIn: 'root'
})
export class WetterService {

constructor(
private httpclient: HttpClient
) { }

/**
 * TODO muss noch beschrieben werden!!!
 * @param ort
 */
getWetter(ort: string): Observable<Wetter> {
return this.httpclient.get<Wetter>('https://api.apixu.com/v1/forecast.json?key=a8e744ad55e14df3bda82412190904&lang=de&days=10&q=' + ort);
}

}
