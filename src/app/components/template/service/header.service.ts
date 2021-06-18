import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from '../header-data.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Home',
    icon: 'home',
    routeUrl: '',
  });
  constructor() {}

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}

//Esse service foi criado para fazer as funções que serão usadas para fazer a comunicação com o Header
//Na hora que mudar de uma pág para a outra, o título do Header também muda
