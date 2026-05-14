import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DragonBallResponse } from '../domain/entities/dragonball-response.model';
import { CharacterMapper } from '../application/mapper/character.mapper';
import { CharacterDTO } from './character.dto';

@Injectable({
  providedIn: 'root',
})
export class DragonballRepository {
  private readonly http = inject(HttpClient);
  private readonly BASE = 'https://dragonball-api.com/api';

  characters = signal<CharacterDTO[]>([]);

  constructor() {
    this.getCharacters();
  }

  getCharacters(page = 1, limit = 15) {
    return this.http.get<DragonBallResponse>(`${this.BASE}/characters?page=${page}&limit=${limit}`).subscribe((data) => {
      const characters = CharacterMapper.mapCharacterToCharacterArray(data.items);
      this.characters.set(characters);
    console.log(characters);
  });
  }
}
