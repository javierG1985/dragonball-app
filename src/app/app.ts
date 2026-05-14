import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  private readonly titleService = inject(Title);

  constructor(){

    this.titleService.setTitle('Dragon Ball App DDD');
  } 
}
