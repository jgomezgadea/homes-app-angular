import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const url = environment.apiUrl + '/locations';
    const data = await fetch(url);
    return await data.json() ?? [];
  }
  
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const url = environment.apiUrl + `/locations/${id}`;
    const data = await fetch(url);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
