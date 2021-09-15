import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any = []
  constructor(private charactersService: CharactersService) {
    this.charactersService.getAll().then(r => {
      this.characters = r.data.results
      console.log(r.data)
    }).catch(err => console.log(err))
  }

  ngOnInit(): void {
  }

}
