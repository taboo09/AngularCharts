import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as c3 from 'c3';
import { DataService } from 'src/app/_services/data.service';
import { DataModel } from 'src/app/_models/data';

@Component({
  selector: 'app-c3-bar',
  templateUrl: './c3-bar.component.html',
  styleUrls: ['./c3-bar.component.scss']
})
export class C3BarComponent implements OnInit {

  @ViewChild('barchart', { static: true }) private chartContainer: ElementRef;

  data: DataModel[];
  margin = {top: 20, right: 20, bottom: 30, left: 40};

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = [];

    this.getData();
  }

  private getData(){
    this.dataService.getData()
      .subscribe(data => this.data = data, error => console.log(error), () => this.createChart());
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const data = this.data;

    let chart = c3.generate({
      bindto: element,
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
      ],
          type: 'bar',
      },
      legend: {
          position: 'bottom',
          item: {
              onclick: function (d) { console.log(d); }
          }
      }
    });
  }
  
}
