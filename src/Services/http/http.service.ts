import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
const headers = new HttpHeaders()
headers.set("Content-Type", "application/json")
@Injectable({
  providedIn: 'root'
})

export class HttpService {

  public endpoint: String = "http://localhost:7251"

  constructor(private http: HttpClient) {

  }

  public getFibonacci(value: string) {
    const options = value ?
      {params: new HttpParams().set('numberOfCount', value)} : {};
    return this.http.get(`${this.endpoint}/Fibonacci`, options)
  }
  public deleteFibonacci(id: string, body: any) {
    const dtoFibonaccis = {dtoFibonaccis: body}
    let options = id ?
      {params: new HttpParams().set('id', id), body, headers} : {};

    let jsonstr = JSON.stringify(body);
    return this.http.delete(`${this.endpoint}/Fibonacci`, options)
  }
}
