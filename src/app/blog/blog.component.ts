import { Component, OnInit } from '@angular/core';
import { GlobalModule } from '../global/global.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../global/footer.component';
import { HeaderComponent } from '../global/header.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone: true,
  imports: [GlobalModule, CommonModule, HeaderComponent, FooterComponent]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
