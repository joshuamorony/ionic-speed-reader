import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextData } from '../../providers/text-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	text: any;

	constructor(public navCtrl: NavController, public textService: TextData) {

	}

	ionViewDidLoad(){
		this.text = this.textService.getSpeedReadingText();
	}

}
