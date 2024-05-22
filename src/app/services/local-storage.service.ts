import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

const SECRET_KEY = '9c789cNC9t78v96BHI23n9y82SDkF49028bt7';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  set(key: string, value: unknown) {
    const enctypted = CryptoJS.AES.encrypt(
      JSON.stringify(value),
      SECRET_KEY
    ).toString();
    return localStorage.setItem(key, enctypted);
  }

  get(key: string) {
    const encrypted = localStorage.getItem(key) || '';
    const dectypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY).toString(
      CryptoJS.enc.Utf8
    );
    return encrypted ? JSON.parse(dectypted) : {};
  }

  remove(key: string) {
    return localStorage.removeItem(key);
  }

  clear() {
    return localStorage.clear();
  }
}
