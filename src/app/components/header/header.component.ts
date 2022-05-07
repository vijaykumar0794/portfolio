import { Component, OnInit } from '@angular/core';
import { faCoffee, faLaptop } from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
