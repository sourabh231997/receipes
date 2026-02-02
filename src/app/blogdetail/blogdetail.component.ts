import { Component, OnInit } from '@angular/core';
import { GlobalModule } from '../global/global.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../global/footer.component';
import { HeaderComponent } from '../global/header.component';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css'],
  standalone: true,
  imports: [GlobalModule, CommonModule, HeaderComponent, FooterComponent]
})
export class BlogdetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
