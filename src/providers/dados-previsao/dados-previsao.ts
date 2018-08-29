import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class DadosPrevisaoProvider {

  constructor(
    private geolocation: Geolocation,
    private http: HTTP) {
  }
  
  recuperarDados(){
    return new Promise((resolve, reject)=>{
      this.http.get('https://api.hgbrasil.com/weather/',{format: 'json', woeid: '455970', locale: 'pt'},{}).then(data =>{
        resolve(JSON.parse(data.data));        
      }).catch(error =>{console.log(error)});
    }).catch(error =>{console.log(error)});    
  }

  recuperarDadosCidade(nomeCidade: string){
    return new Promise((resolve, reject)=>{
      this.http.get('https://api.hgbrasil.com/weather/',{locale: 'pt', format: 'json', city_name: nomeCidade, key: '1e93b1de'},{}).then(data =>{
        resolve(JSON.parse(data.data));
      }).catch(error=>{console.log(error)});
    }).catch(error=>{console.log(error)});
  }

}
