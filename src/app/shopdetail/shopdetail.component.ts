import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../global/footer.component';
import { HeaderComponent } from '../global/header.component';

@Component({
  selector: 'app-shopdetail',
  templateUrl: './shopdetail.component.html',
  imports: [HeaderComponent, FooterComponent],
  styleUrls: ['./shopdetail.component.css']
})
export class ShopdetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
