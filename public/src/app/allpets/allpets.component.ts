import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-allpets',
  templateUrl: './allpets.component.html',
  styleUrls: ['./allpets.component.css']
})
export class AllpetsComponent implements OnInit {
  all_pets: any
  constructor(private _httpService: HttpService,private _router: Router) { }

  ngOnInit() {
    this.getAllPets();
  }
  
  getAllPets() {
    let all = this._httpService.get_All();
    all.subscribe(data => {
      console.log("Got all pets", data)
      this.all_pets = data['task'];
    })
  }

}
