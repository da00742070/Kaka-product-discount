import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataloadService} from './dataload.service';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Resultfirst;
  Resultsecond;
  ResultThird;
  constructor(private load: DataloadService) {}
  getDataServer() {
    let obj = this.load.LoadData();
    var isA = false;
    var X = 0;
    var Y = 0;
    obj.subscribe(data => {
    Object.keys(data.products).forEach(function(index){
      var Val = data.products[index].id;

    // Follow Bussiness Rules
      if(Val=='A'){
        isA = true;
      }

      if(Val == 'B' || Val == 'C'){
        X++;
      }

      if(Val == 'D'){
        Y++;
      }

    });

    if(!isA){
      if(!isA && (X>0 && X!=1)){
      Y = 0;
      }else{
     X = Y = 0;
     }
    }
    this.Resultfirst = []
    console.log([{id:'X',quantity:X},{id:'Y',quantity:Y}]);
    var Result = [{id:"X",quantity:X},{id:"Y",quantity:Y}];            
    this.Resultfirst.push(Result)
   
   //  return [{id:'X',quantity:X},{id:'Y',quantity:Y}];
    })
  };

  getDataServerSecond() {
    let obj = this.load.LoadDataSecond();
    var isA = false;
    var X = 0;
    var Y = 0;
    obj.subscribe(data => {
    Object.keys(data.products).forEach(function(index){
      var Val = data.products[index].id;

    // Follow Bussiness Rules
      if(Val=='A'){
        isA = true;
      }

      if(Val == 'B' || Val == 'C'){
        X++;
      }

      if(Val == 'D'){
        Y++;
      }

    });

    if(!isA){
      if(!isA && (X>0 && X!=1)){
      Y = 0;
      }else{
     X = Y = 0;
     }
    }
    this.Resultsecond = []
    console.log([{id:'X',quantity:X},{id:'Y',quantity:Y}]);
    var Result = [{id:"X",quantity:X},{id:"Y",quantity:Y}];            
    this.Resultsecond.push(Result)
    })
  };
  getDataServerThird() {
    let obj = this.load.LoadDataThird();
    var isA = false;
    var X = 0;
    var Y = 0;
    obj.subscribe(data => {
    Object.keys(data.products).forEach(function(index){
      var Val = data.products[index].id;

    // Follow Bussiness Rules
      if(Val=='A'){
        isA = true;
      }

      if(Val == 'B' || Val == 'C'){
        X++;
      }

      if(Val == 'D'){
        Y++;
      }

    });

    if(!isA){
      if(!isA && (X>0 && X!=1)){
      Y = 0;
      }else{
     X = Y = 0;
     }
    }
    this.ResultThird = []
    console.log([{id:'X',quantity:X},{id:'Y',quantity:Y}]);
    var Result = [{id:"X",quantity:X},{id:"Y",quantity:Y}];            
    this.ResultThird.push(Result)
    })
  };

  ngOnInit() {
    this.getDataServer();
    this.getDataServerSecond();
    this.getDataServerThird();
    // console.log(data);
  }; 

}
