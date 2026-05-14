import { Component, inject } from '@angular/core';
import { DragonballRepository } from '../../../infrastructure/dragonball.repository';
import { CharacterListComponent } from "../../components/character-list/character-list.component";

@Component({
  selector: 'app-dragonball-page',
  templateUrl: './dragonball-page.component.html',
  styleUrls: ['./dragonball-page.component.css'],
  imports: [CharacterListComponent]
})
export default class DragonballPageComponent {

  public characterService = inject(DragonballRepository);
  constructor() { }



}
