import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }
  amigos = [
    {
      nome: 'Igor',
      idade: '28',
      nivel: 5
    },
    {
      nome: 'Ana',
      idade: '23',
      nivel: 4
    },
    {
      nome: 'Gisleine',
      idade: '27',
      nivel: 5
    },
    {
      nome: 'Gustavo',
      idade: '28',
      nivel: 5
    },
    {
      nome: 'Marcos',
      idade: '22',
      nivel: 3
    },
    {
      nome: 'Samara',
      idade: '25',
      nivel: 5
    },
    {
      nome: 'Renata',
      idade: '39',
      nivel: 5
    }];




  ngOnInit() {
    // console.log(this.amigos);
  }

  async onDeleteClick (item) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Amigos',
      buttons: [
        { 
          text: 'Deletar', 
          role: 'destructive',
          handler: () => {
            this.deleteAmigo(item);
          }
       },
        { text: 'Editar', role: 'edit' },
        { text: 'Cancel', role: 'cancel'}
      ]
    });
    await actionSheet.present();
  }

  deleteAmigo(item) {
    var index = this.amigos.findIndex(i => i.nome === item.nome);
    this.amigos.splice(index,1);

  }
}
