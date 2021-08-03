import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/IProprty.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent:Number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array<IProperty> = [];
        console.log(data)
        for (const id in data) {
          if(data.hasOwnProperty(id) && data[id].SellRent == SellRent) {
            propertiesArray.push(data[id]);
          }
          // console.log(id)
          // console.log(data[id])

        }
        // const propertyArray: Array<IProperty> = JSON.parse(jsonData);
        return propertiesArray;
      })
    );
  }
}
