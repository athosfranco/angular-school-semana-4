import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  titulo: string = 'Produtos';
  exibe: boolean = true;

  exibeProduto = false;

  produtos: Array<Product> = [
    {
      descricao: 'Fone de Ouvido',
      preco: 80.0,
      quantidade: 1,
      imagem:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQJgoQQDzgvJovHAo0ijNSpg6skOjm9_lohn_q4JT9FvcleRSSPrmgfinwRfaGjtnifpAwMebacXw&usqp=CAc',
      desconto: 0.6,
      disponivel: true,
    },
    {
      descricao: 'Guitarra',
      preco: 1500,
      quantidade: 5,
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4v1x3cjGQYRJ4Pui7ci54HU2PZb1M337epQ&usqp=CAU',
      desconto: 0.1,
      disponivel: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  exibeSimNao() {
    this.exibe = !this.exibe;
  }

  comprou() {
    alert('Comprou produto.');
  }

  precoComDesconto(preco: number, desconto: number) {
    return preco * (1 - desconto);
  }
}
