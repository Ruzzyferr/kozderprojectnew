import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor, MatButton} from '@angular/material/button';
import {HeaderComponent} from './kozder-app/header/header.component';
import { Tooltip, initTWE } from 'tw-elements';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink, HeaderComponent, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ESC Organizasyonu';

  constructor(private router: Router) {
  }
  ngOnInit() {
    initTWE({ Tooltip });
  }

}
