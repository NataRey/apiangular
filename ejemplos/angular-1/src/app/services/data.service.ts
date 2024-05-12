import { Injectable, inject } from '@angular/core';
//importo el inject y el httpclient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  //crear un atributo de esta clase para guaradar la url 
  API_URL: string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  //voy a crear una varible con cualquier nombre lo importante es que recuerde que est es para que me lea el http del api 
  httpClient = inject (HttpClient);
  // creo un metodo que vaya y me traiga los datos DEL API
  obtenerDatos (){
    return this.httpClient.get(this.API_URL);
    // DESPUES DE ESTO VOY A LA LOGICA DE MI COMPONENTE
    //app.component.ts
  }
}
