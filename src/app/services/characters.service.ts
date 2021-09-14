import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  apiKey = environment.apiKey
  apiURL = "https://gateway.marvel.com/v1/public/characters?"

  getAll() {
    return axios.get(this.apiURL + this.apiKey).then(res => res.data).catch(err => console.log(err))
  }

  constructor() { }
}