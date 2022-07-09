import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  tituloComponente = 'Colaborador';

  constructor() {}

  ngOnInit(): void {}

  colaborador = {
    id: 7,
    nome: 'Athos Franco',
    salario: 12500,
    cargo: 'Senior JavaScript Fullstack Developer',
    imagem:
      'https://avatars.githubusercontent.com/u/73993813?s=400&u=72a29da96d144ce4410be5cae3f916952122bcd2&v=4',
  };
}
