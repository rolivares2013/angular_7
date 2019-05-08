import { Component, AfterViewInit,Input } from '@angular/core';
import * as c3 from 'c3';


@Component({
  selector: 'app-sales-income',
  templateUrl: './sales-income.component.html'
})
export class SalesIncomeComponent implements AfterViewInit {
  @Input() dataGrah: any ;

  dataEqp : number;
  porcentageEqpReview : number;
  dataCriticaly = [] ; 
  dataAvaneEqp = [];
  dataTMPCrit = [];
  datafoun = '';
  constructor() { }


  ngAfterViewInit() {

    console.log('dataGrah--ngAfterViewInit');

    console.log(this.dataGrah);

   // this.dataEqp =  this.dataGrah.length;

   this.dataEqp = 0;
    let strfuncLocProject = '';
    let strfuncLocEqp = '';
    let strfuncLocComponent = '';
    let contLow = 0;
    let contMedium = 0;
    let contHight = 0;
    let contVeryHight = 0;
    let countEqpReview = 0;
    this.porcentageEqpReview = 0;

    for( var i = 0; i < this.dataGrah.length; i++){ 
      this.datafoun = this.dataGrah[i].eqpwhe.eqpwhea.functionalLocation;

      console.log('this.dataGrah[i].this.dataGrah[i].eqpwhe.eqpwhea.functionalLocation');
      console.log(this.dataGrah[i].eqpwhe.eqpwhea.functionalLocation);
      console.log(this.dataGrah[i].eqpwhe.eqpwhea);
      console.log(this.dataGrah[i].eqpwhe);
      strfuncLocProject = this.datafoun.split('-',3)[0];
      strfuncLocEqp = this.datafoun.split('-',3)[1];
      strfuncLocComponent = this.datafoun.split('-',3)[2];

      if (strfuncLocProject != undefined && strfuncLocEqp != undefined && strfuncLocComponent == undefined) 
      {

        console.log('this.dataGrah[i].CriticalityLevelId');
        console.log(this.dataGrah[i].CriticalityLevelId);
        this.dataEqp = this.dataEqp  + 1;
        if (this.dataGrah[i].CriticalityLevelId != null) {

          if (this.dataGrah[i].CriticalityLevelId == 1) {contLow = contLow + 1;}
          if (this.dataGrah[i].CriticalityLevelId == 2) {contMedium = contMedium + 1;}
          if (this.dataGrah[i].CriticalityLevelId == 3) {contHight = contHight + 1;}
          if (this.dataGrah[i].CriticalityLevelId == 4) {contVeryHight = contVeryHight + 1;}
          countEqpReview = countEqpReview + 1
        }
      
      }  

    }

//this.dataTMPCrit.push([])


// this.equipments = $.parseJSON(JSON.stringify(this.dataEquipmentsTmp));
    this.dataCriticaly = [];
    this.dataCriticaly.push(['Low',contLow]);
    this.dataCriticaly.push(['Medium',contMedium]);
    this.dataCriticaly.push(['Hight',contHight]);
    this.dataCriticaly.push(['VeryHight',contVeryHight]);

    this.porcentageEqpReview = (countEqpReview/this.dataEqp) * 100;
    console.log ('this.this.dataEqp');
    console.log (this.dataEqp);
    console.log ('countEqpReview');
    console.log (countEqpReview);
    console.log ('this.porcentageEqpReview.dataEqp');
    console.log (this.porcentageEqpReview);

    this.dataTMPCrit = $.parseJSON(JSON.stringify(this.dataCriticaly));



    const chart = c3.generate({
      bindto: '#income',
      data: {
        columns: [
          ['Low', contLow],
          ['Medium', contMedium],
          ['Hight', contHight],
          ['VeryHight', contVeryHight]
        ],
        type: 'bar'
      },
      bar: {
        space: 0.2,
        // or
        width: 15 // this makes bar width 100px
      },
      axis: {
        y: {
          tick: {
            count: 3,
            outer: false
          }
        }
      },
      legend: {
        hide: true
        // or hide: 'data1'
        // or hide: ['data1', 'data2']
      },
      grid: {
        x: {
          show: false
        },
        y: {
          show: true
        }
      },
      size: {
        height: 270
      },
      color: {
        pattern: ['#4798e8', '#ccc']
      }
    });

    const chart2 = c3.generate({
      bindto: '#sales',
      data: {
        columns: this.dataTMPCrit,//[['One+', 50], ['T', 60], ['Samsung', 10]],

        type: 'donut'
      },
      donut: {
        label: {
          show: false
        },
        title: '',
        width: 18
      },
      size: {
        height: 150
      },
      legend: {
        hide: true
        // or hide: 'data1'
        // or hide: ['data1', 'data2']
      },
      color: {
        pattern: ['#ffffff', '#4798e8', '#24d2b5', '#20aee3']
      }
    });
    // ==============================================================
    // Sales Prediction
    // ==============================================================

    const chart3 = c3.generate({
      bindto: '#prediction',
      data: {
        columns: [['% Eqp Reviewed', this.porcentageEqpReview]],
        type: 'gauge'
      },

      color: {
        pattern: ['#20aee3', '#20aee3', '#20aee3', '#24d2b5'], // the three color levels for the percentage values.
        threshold: {
          //            unit: 'value', // percentage is default
          //            max: 200, // 100 is default
          values: [30, 60, 90, 100]
        }
      },
      gauge: {
        width: 22
      },
      size: {
        height: 120,
        width: 150
      }
    });
  }
}
