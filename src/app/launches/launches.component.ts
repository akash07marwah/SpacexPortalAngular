import { Component, OnInit } from '@angular/core';
import {GetLaunchesService} from '../get-launches.service';
@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  constructor(public GetLaunches:GetLaunchesService) { }
  launches;
  ngOnInit(): void {
    this.GetLaunches.getLaunches().subscribe(res=>{
      this.launches=res;
      console.log(typeof(this.launches));
    })
  }
}
