import { Component, OnInit } from '@angular/core';
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  twitter = faTwitter;
  faInstagram = faInstagram;
  faGitHub = faGithub
  constructor() { }

  ngOnInit(): void {
  }

}
