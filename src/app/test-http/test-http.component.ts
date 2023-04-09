import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Datos {
  constructor(
     public userId: number,
     public id: string,
     public title: string,
     public body: string
  ) {}
}
@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent {
  data: Datos [] =[ {userId:0,id:"1",title:"titulo",body:"cuerpo"},{userId:1,id:"2",title:"titulo",body:"cuerpo"}];
  TestHttpBt(){
    console.log("Inicia función TestHttpBt");
    this.data.push({userId:2,id:"2",title:"titulo2",body:"cuerpo2"});

  }
  removeItem(){
    this.data.pop();
  }

}
