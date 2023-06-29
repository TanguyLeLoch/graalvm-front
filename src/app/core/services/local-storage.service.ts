import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  setItem(key: string, value: any): void {
    console.log("setItem key: " + key + " value: " + JSON.stringify(value));
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = this.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }

  clear(): void {
    this.localStorage.clear();
  }
}
