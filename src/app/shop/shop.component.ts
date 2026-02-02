import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../global/footer.component';
import { HeaderComponent } from '../global/header.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  imports: [HeaderComponent, FooterComponent],
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
