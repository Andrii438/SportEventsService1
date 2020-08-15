import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataService } from '../service/data.service';
import { MyEvent } from '../add-event/add-event.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-rest-events',
  templateUrl: './rest-events.component.html',
  styleUrls: ['./rest-events.component.css']
})
export class RestEventsComponent implements OnInit {
  events:MyEvent[]
  constructor(private activatedRoute: ActivatedRoute,
    private service: DataService) { }
  private type: string;
  private typeToLower: string;
  ngOnInit(): void {
    this.type = this.activatedRoute.snapshot.paramMap.get('type')
    console.log("type:"+this.type)
    this.typeToLower=this.type.toLowerCase()
     this.service.getEventsByType(this.typeToLower).subscribe(
       data=>{
         console.log(data)
         this.events=data
       }
     )
  }
}
