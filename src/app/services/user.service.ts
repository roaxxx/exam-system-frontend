import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    /**
     * Contructor
     * @param httpClient objeto de cliente http
     */
    constructor(private httpClient: HttpClient) { }

    /**
     * seed user to save in backend
     * @param user object
     * @returns return user if saved or null if not
     */
    public saveUser(user: any){
      return this.httpClient.post(`${baseUrl}/users/saveUser`,user);
    }

}
