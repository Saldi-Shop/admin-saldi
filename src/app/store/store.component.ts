import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  productId: string="";

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Verifica si el parámetro 'id' está presente en la URL
      if (params['id']) {
        this.productId = params['id'];
        console.log(this.productId );
        // Realiza acciones relacionadas con el parámetro 'id'
      } else {
        // No se proporcionó un parámetro 'id', puedes mostrar un mensaje o contenido predeterminado
        this.productId = 'No se proporcionó un ID';
      }
    });
  }
}