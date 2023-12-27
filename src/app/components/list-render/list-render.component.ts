import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from 'src/app/Intefaces/Produtos';
import { Animal } from 'src/app/Intefaces/Animais';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animais: Animal[] = [];
  products: Produtos[] = [];

  constructor(private http: HttpClient, private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {
    this.http.get('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
      .subscribe((data: any) => {
        this.products = data;
      });
  }

  produtoType =''

  showType(product: Produtos): void {
    this.produtoType = `O produto : ${product.name}, pertence ao tipo ${product.type}`;
  }

  removeProduct(product: Produtos): void {
    this.products = this.listService.remove(this.products, product);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animais) => (this.animais = animais));
  }

  removeAnimal(animal: Animal): void {
    this.animais= this.animais.filter((item) => animal.name !== item.name)
    this.listService.removeAnimal(animal.id).subscribe();
  }
}
