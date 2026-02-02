import { Component, OnInit } from '@angular/core';
import { GlobalModule } from '../global/global.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../global/header.component';
import { FooterComponent } from '../global/footer.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [GlobalModule, CommonModule, HeaderComponent, FooterComponent]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
