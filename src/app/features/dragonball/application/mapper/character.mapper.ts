import { ItemsItem } from "../../domain/entities/dragonball-response.model";
import { CharacterDTO } from "../../infrastructure/character.dto";

export class CharacterMapper {
    static mapCharacterToCharacterArray(items: ItemsItem[]): CharacterDTO[] {
    return items.map(this.mapCharacterItemToCharacter);
  }


  static mapCharacterItemToCharacter(item: ItemsItem): CharacterDTO {
    return {
      id: item.id,
      name: item.name,
      ki: item.ki,
      maxKi: item.maxKi,
      race: item.race,
      gender: item.gender,
      description: item.description,
      image: item.image
    };
  }
}