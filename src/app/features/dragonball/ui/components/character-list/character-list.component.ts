import { Component, input, OnInit } from '@angular/core';
import { CharacterDTO } from '../../../infrastructure/character.dto';
import { CharacterCardComponent } from "./character-card/character-card.component";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  imports: [CharacterCardComponent]
})
export class CharacterListComponent implements OnInit {

  characters = input.required<CharacterDTO[]>();
  constructor() { }

  ngOnInit() {
  }

}
