import { Component, input, OnInit } from '@angular/core';
import { CharacterDTO } from '../../../../infrastructure/character.dto';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

   character = input.required<CharacterDTO>();
  constructor() { }

  ngOnInit() {
  }

}
