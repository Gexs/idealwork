import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioSoluzioneModule } from './dettaglio-soluzione/dettaglio-soluzione.module';
import { SoluzioniModule } from './soluzioni/soluzioni.module';
import { CategorieProdottoModule } from './categorie-prodotto/categorie-prodotto.module';
import { ListaProdottiModule } from './lista-prodotti/lista-prodotti.module';
import { RiepilogoOrdineModule } from './riepilogo-ordine/riepilogo-ordine.module';
import { ElencoOrdiniModule } from './elenco-ordini/elenco-ordini.module';
import { NovitaModule } from './novita/novita.module';

import { DettaglioProdottoComponent } from './dettaglio-prodotto/dettaglio-prodotto.component';

const routes: Routes = [
  {
    path: 'soluzioni',
    loadChildren: 'src/app/soluzioni/soluzioni.module#SoluzioniModule',
    pathMatch: 'full'
  },
  { 
    path: '', 
    redirectTo: 'soluzioni', 
    pathMatch: 'full' 
  },
  {
    path: 'dettaglio-soluzione',
    loadChildren: 'src/app/dettaglio-soluzione/dettaglio-soluzione.module#DettaglioSoluzioneModule'
  },
  {
    path: 'categorie-prodotto',
    loadChildren: 'src/app/categorie-prodotto/categorie-prodotto.module#CategorieProdottoModule'
  },
  {
    path: 'lista-prodotti',
    loadChildren: 'src/app/lista-prodotti/lista-prodotti.module#ListaProdottiModule'
  },
  {
    path: 'prodotto',
    component: DettaglioProdottoComponent
  },
  {
    path: 'riepilogo-ordine',
    loadChildren: 'src/app/riepilogo-ordine/riepilogo-ordine.module#RiepilogoOrdineModule'
  },
  {
    path: 'elenco-ordini',
    loadChildren: 'src/app/elenco-ordini/elenco-ordini.module#ElencoOrdiniModule'
  },
  {
    path: 'novita',
    loadChildren: 'src/app/novita/novita.module#NovitaModule'
  }
];

@NgModule({
  imports: [
    DettaglioSoluzioneModule,
    SoluzioniModule,
    CategorieProdottoModule,
    ListaProdottiModule,
    RiepilogoOrdineModule,
    ElencoOrdiniModule,
    NovitaModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
