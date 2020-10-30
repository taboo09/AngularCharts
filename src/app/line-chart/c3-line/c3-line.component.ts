import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataModel } from 'src/app/_models/data';
import { DataService } from 'src/app/_services/data.service';
import * as c3 from 'c3';

@Component({
  selector: 'app-c3-line',
  templateUrl: './c3-line.component.html',
  styleUrls: ['./c3-line.component.scss']
})
export class C3LineComponent implements OnInit {

  @ViewChild('linechart', { static: true }) private chartContainer: ElementRef;

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
    const letters = this.data.map( item => item['letter']);
    const frequencies = this.data.map( item => item['frequency']);
    const columns = [];
    this.data.forEach(item => columns.push([item['letter'], item['frequency']]));
    const test = frequencies.map(item => item + 0.01);

    let chart = c3.generate({
      bindto: element,
      data: {
        columns: [
          ['Letters', ...frequencies],
          ['Test', ...test]
        ],
        type: 'line',
      },
      axis: {
        x: {
            type: 'category',
            categories: letters
        }
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
