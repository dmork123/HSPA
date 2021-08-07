import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent:Number): Observable<IPropertyBase[]> {
    return this.http.get('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array<IPropertyBase> = [];
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
