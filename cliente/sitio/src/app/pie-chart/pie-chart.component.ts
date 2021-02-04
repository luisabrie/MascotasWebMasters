import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from "d3";
import { Observable } from 'rxjs';
import { PieDataService } from '../services/pie-data.service';
import { PieData } from './pie-data';


@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements AfterViewInit, OnInit{

    @ViewChild('containerPieChart') element: ElementRef;

    private pieData: PieData[];
    private host: d3.Selection<d3.BaseType,{}, d3.BaseType, any>;
    private svg: d3.Selection<SVGElement, {}, d3.BaseType, any>;
    private width: number;
    private height: number;
    private radius: number;
    private htmlElement: HTMLElement;

    private mascotas$ : Observable<PieData[]>;

  constructor(private dataService: PieDataService
    ) {

    
  }
    ngAfterViewInit(): void {
        this.htmlElement =this.element.nativeElement
        this.host = d3.select(this.htmlElement)
        this.mascotas$ = this.dataService.getMascotasTipo()
        this.mascotas$.subscribe(data=>{
            this.pieData = data
            this.setup()
            this.buildSVG()
            this.buildPie()

        });
        
    }

    private setup(): void{
        this.width = 250
        this.height = 250
        this.radius = Math.min(this.width, this.height)/2

    }

    private buildSVG(): void{
        this.host.html("")
        this.svg = this.host.append("svg")
        .attr("viewBox",` 0 0 ${this.width} ${this.height}`)
        .append("g")
        .attr("transform", `translate(${this.width/2}, ${this.height/2})`)

    }

    private buildPie(): void{
        let pie = d3.pie();
        let values = this.pieData.map(data=>data.value)

        let arcSelection = this.svg.selectAll(".arc")
        .data(pie(values))
        .enter()
        .append("g")
        .attr("class", "arc")

        this.populatePie(arcSelection)

    }

    private populatePie(arcSelection): void{
        let innerRadius = this.radius -50
        let outerRadius = this.radius -10
        let pieColor = d3.scaleOrdinal(d3.schemeCategory10)
        let arc = d3.arc().innerRadius(0).outerRadius(outerRadius)
        arcSelection.append("path")
        .attr("d",arc)
        .attr("fill",(datum,index)=>{
            return pieColor(this.pieData[index].label)
        })

        arcSelection.append("text")
        .attr("transform",(datum:any)=>{
            datum.innerRadius = 0;
            datum.outerRadius = outerRadius
            return "translate(" + arc.centroid(datum) + ")";
        })
        .text((datum,index)=>this.pieData[index].label)
        .style("text-anchor", "middle")


    }

  ngOnInit() {

  }

}
