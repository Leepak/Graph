import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import embed, { vega, VisualizationSpec } from 'vega-embed';
import vegaTooltip from 'vega-tooltip';


@Component({
selector: 'app-charts',
templateUrl: './charts.component.html',
styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
response = [];
  vegaLiteSpec = [];
graph=[];
VegaData=[];
view:any;
// @Input() id: any;
@Input() chartWidth: number;
@Input() chartHeight: number;




@Output() outgoingData = new EventEmitter<any>();
 


  constructor(public http: HttpClient){
    this.http.get('/assets/graph/graphconfig.json').subscribe( (res:any)=>{
    this.vegaLiteSpec = res;
    // this.renderVegaLite(res,this.graph);
    this.http
    .post(
    'https://graphql.datocms.com/',{
  
    query:`
    query MyQuery {
  allPopulations(orderBy: age_ASC) {
    id
    createdAt
    age
    sex
    year
    people
  }
}
    `
    }
    )
    .subscribe((res:any) => {
  
    const Data = res.data;
    this.graph = Data.allPopulations;
//  debugger;

  
  
    });
  
  
    // //
  
    })
    
    }
 


  public vegaInit(spec: any, id:number) {
    

    var graphdata = this.graph
   this.view = new vega.View(vega.parse(spec))
  .logLevel(vega.Warn) // set view logging level
  .renderer('canvas') // set renderer (canvas or svg)
  .initialize(document.querySelector('#chart'+id)) // initialize view within parent DOM container
  .insert("population",graphdata)
  .hover() // enable hover encode set
  .run()
  vegaTooltip(this.view);


  // window.onresize = function (event) {
  //   this.view.signal('width', event.target.innerWidth - 100)
  //    this.view.signal('height', event.target.innerHeight - 100)
  //       .run('enter');
  // }
 
  // var changeSet = vega
  // .changeset()
  // .remove(vega.truthy)
  // .insert(graphdata);
  // this.view.change('population', changeSet).run();
  // .width(this.view.wrapperElem.offsetWidth)
  // .height(this.view.wrapperElem.offsetWidth / this.view.widthHeightRatio)
  

  









  }


    // public vegaLiteSpec: TopLevelSpec ;

  ngOnInit(){
    


  }
  }
