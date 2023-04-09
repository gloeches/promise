import { Component } from '@angular/core';

@Component({
  selector: 'app-test-promise',
  templateUrl: './test-promise.component.html',
  styleUrls: ['./test-promise.component.css']
})
export class TestPromiseComponent {

  public  execPromise():Promise<string>{
    console.log("Empieza execPromise");
    return new Promise ( (resolve, reject) =>{
      console.log("start Promise");
        setTimeout(function(){
        console.log("dentro del setTimeout");
//        reject('ha fallado el promise');
        resolve ('Promise returns after 1.5 second!');
        
      }, 1500);
      console.log("exit Promise");
    });
    
  }

  async testButtom(){
    
    console.log("Empieza testButtom");
    await this.execPromise().then(
      (val)=>{
        console.log(val);
        console.log("se acabo");},
      (err)=>console.error(err) );
    
    console.log("Termina testButtom");
    console.log("=:=:=:=:=:=:=:=:=:=:=:=:=:");
    
      
  }

  pulsaBoton(){
    console.log("********************");
    console.log("empieza pulsaboton");
    this.testButtom();
    console.log("termina pulsaBoton");
  }

}
