import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengersArr! : Array<Ipassenger>
  CheckIncount! :number
  constructor(
    private _passservice:PassengerService
  ) { }

  ngOnInit(): void {
    this.passengersArr = this._passservice.fetchAllpass()
  }

  getcheckIncount(){
    this.CheckIncount = this.passengersArr.filter(pass=>pass.checkedIn).length
  }

  onRemoveupdate(eve:any){
  this.getcheckIncount()
  }

}
