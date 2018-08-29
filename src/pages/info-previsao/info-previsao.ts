import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-info-previsao',
  templateUrl: 'info-previsao.html',
})
export class InfoPrevisaoPage {
  
  dados: any;

  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
    console.log(navParams.get('item'));
    this.dados = navParams.get('item');
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  }
  
}
