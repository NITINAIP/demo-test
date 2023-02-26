import {Component} from '@angular/core';
import {HttpService} from 'src/Services/http/http.service';
//@ts-ignore
import {v4 as uuidv4} from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  constructor(private http: HttpService) { }
  title = 'demo-test';
  public data: respone[] = new Array();


  ngOnInit() {
    this.http.getFibonacci("2").subscribe(next => {
      this.data.push(next as respone)
    }, error => console.log(error));
  }
  get isData(): boolean {
    return this.data.length > 0
  }
  ADD(items: respone) {
    let {input} = items
    let pram: number = Number(input) + 1;
    this.http.getFibonacci(`${pram}`).subscribe(next => {
      this.data = [ ...this.data, next as respone ]
    }, error => console.log(error));

  }
  NEW() {
    this.http.getFibonacci(`2`).subscribe(next => {
      console.log(this.data)
      this.data = [ ...this.data, next as respone ]
      console.log(this.data)
    }, error => console.log(error));

  }
  DELETE(items: respone) {
    const {id}: respone = items
    this.http.deleteFibonacci(id, this.data).subscribe(next => {
      this.data = next as respone[]
    }, error => console.log(error));

  }
  Clear() {
    this.data = [];

  }
}
type respone = {
  id: string
  input: number | string
  result: number,
  statuscode: number,
  resultstep: string,

}