import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newpet',
  templateUrl: './newpet.component.html',
  styleUrls: ['./newpet.component.css']
})
export class NewpetComponent implements OnInit {
  pet:any;
  error:any;
  unique:any;
  constructor(private _httpService: HttpService,private _router: Router) { }

  ngOnInit() {
    this.pet = { name: "", type: "", description: "", skills: []}
  }

  Add_Pet(){
    let new_pet = this._httpService.add_New(this.pet);
    new_pet.subscribe(data => {
      if (data['error']) {
        console.log("Got errors", data["error"].errors); 
        this.error = data["error"].errors;
      } 
      else if (data['use']){
        console.log("aaaaa",data['use'])
        this.unique = data["use"];
      }
      else {    
        this.pet = { name: "", type: "", description: "", skills: []}
        this._router.navigate(['/pets']);     
      }
    })
  }

}
