import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit {


  title = 'GGLOVE';
  name = 'FUCKANGULAR'
  name2 = "gooaye";


  constructor() { }

  ngOnInit(): void {
  }

  get score(){
    let letters = (this.name+this.name2).toLowerCase();
    let sum = 0;
    for(let i=0; i<letters.length;i++){
      sum+=letters.charCodeAt(i)
    }
    return sum%100;
  }
  
}
  
