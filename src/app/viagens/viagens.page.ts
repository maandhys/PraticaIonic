import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  constructor() { }
  viagens = [
    {
      local: 'Minas Gerais',
      descricao: 'BH CORONA VAIRUS',
      data: '13/05/2020',
      imagem:'https://defatoonline.com.br/wp-content/uploads/2020/05/alexandre-kalil-isolamento-bh.jpeg'},
    {
      local: 'Canada',
      descricao: 'Intercâmbio Toronto',
      data: '10/10/2012',
      imagem: 'https://www.toronto.ca/wp-content/uploads/2020/03/94a1-emergency-home-page-skyline.jpg',
    }
  ]
  ngOnInit() {
  }

}

// No componente Viagens crie um array de viagens contendo local, descricao, data da
// visita e imagem da viagem.