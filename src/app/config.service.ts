import { Injectable } from '@angular/core';
import { config } from '../app/config'
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  c = config
  constructor() { }

  getConfig() {
    return this.c;
  }
}
