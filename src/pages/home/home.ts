import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage, LoadingController, Platform } from 'ionic-angular';
import { DadosPrevisaoProvider } from '../../providers/dados-previsao/dados-previsao';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  previsao: any;
  cidade: string;

  constructor(
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    platform: Platform,
    private loading: LoadingController,
    private modalCtrl: ModalController,
    private dadosPrevisao: DadosPrevisaoProvider,
    public navCtrl: NavController) {
      platform.ready().then(()=>{
        splashScreen.hide();
        statusBar.styleDefault();
      });
    }
    
    ionViewDidLoad(){
      let load = this.loading.create({
        spinner: 'dots',
        content: 'Carregando dados'
      });
      load.present();
      this.dadosPrevisao.recuperarDados().then(resp =>{
        console.log(resp);
        this.previsao = resp;
        load.dismiss();
      }).catch(error=>{
        load.dismiss();
        console.log(error)});  
  }

  buscarCidade(){

    let loading = this.loading.create({
      content: 'Carregando dados'
    });
    loading.present();
    if(this.cidade == ''){
      this.cidade = 'Macapa';
    }
    else {
      this.dadosPrevisao.recuperarDadosCidade(this.cidade).then(data=>{
      this.previsao = data;
      loading.dismiss();
      }).catch(error=>{
        loading.dismiss();
        console.log(error)});
    }
  }

  abreModal(item){
    let profileModal = this.modalCtrl.create('InfoPrevisaoPage',{item: item});
    profileModal.present();
  }

}

