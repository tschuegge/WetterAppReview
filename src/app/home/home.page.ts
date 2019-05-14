import { Component, OnInit } from '@angular/core';
import { WetterService } from '../services/WetterService';
import { Wetter } from '../models/wetter';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ort = 'Buchs';
  wetter: Wetter;
  fehler: string;
  isLoading = false;

  constructor(
    private wetterService: WetterService
  ) { }

  /**
   * Beim Initialisieren der Seite den letzten Ort aus dem LocalStorage laden und Ansicht aktualisieren
   */
  ngOnInit(): void {

    // Ort aus dem LocalStorage laden, sofern vorhanden
    if (localStorage && localStorage.getItem('wetterapp-city')) {
      this.ort = localStorage.getItem('wetterapp-city');
    }

    this.aktualisiereAnsicht();
  }

  /**
   * Aktualisiert das Wetter auf der Ansicht
   */
  aktualisiereAnsicht() {

    // Falls Fehler angezeigt wird, diesen zurücksetzen
    this.fehler = null;

    // Neuer Ort im LocalStorage speichern, sofern LocalStorage vorhanden
    if (localStorage) {
      localStorage.setItem('wetterapp-city', this.ort);
    }

    // Ladeindikator anzeigen
    this.isLoading = true;

    // Wetter laden
    this.wetterService.getWetter(this.ort).subscribe(

      // Erfolgsfall
      wetter => {
        this.wetter = wetter;
        this.isLoading = false; // Ladeindikator ausblenden
      },

      // Fehlerfall
      fehler => {
        this.fehler = fehler.message;
        this.isLoading = false; // Ladeindikator ausblenden
      },
    );
  }

}
