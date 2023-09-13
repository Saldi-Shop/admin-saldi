import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const storeName = params.get('id'); // 'id' es el nombre del parámetro en la URL
      if (storeName) {
        // Ahora puedes usar productId como desees en tu componente
        console.log(storeName);
      }
    });
  }
}
