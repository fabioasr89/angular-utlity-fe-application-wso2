import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { VOCI_MENU } from 'src/app/constants/sidebar';
import { VociMenu } from 'src/app/model/common/voci';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  voci:VociMenu[]

  constructor() { }

  ngOnInit(): void {
    this.voci=VOCI_MENU;
  }


  seleziona(event:MouseEvent):void{
    let element=event.target as Element
    console.log("MouseOver id:"+element.id);
    if(element.id!=null && element.id != undefined && element.id!=""){
      document.getElementById(element.id)!.style.backgroundColor="rgb(200, 200, 170)";
    }
   
  }

  deseleziona(event:MouseEvent):void{
    let element=event.target as Element
    if(element.id!=null && element.id != undefined && element.id!=""){
      document.getElementById(element.id)!.style.backgroundColor="white";
    }
    
  }


  attiva(event:MouseEvent):void{
    let element=event.target as Element
    let id=element.id;
    console.log("Id selezionato:"+id)
    let i:number=0
    while(true){
      i++;
      let v=document.getElementById(id+"_"+i);
      console.log("Elemento selezionato:"+v);
      if(v!=null && v!= undefined){
        if(v.classList.contains('hide')){
          v.classList.remove('hide');
        }else{
          v.classList.add('hide');
        }
      }else{
        console.log("Sei uscito dal while. Numero cicli:"+i);
        break;
      }
    }

    
  }
}
