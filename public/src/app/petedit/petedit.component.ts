import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-petedit',
  templateUrl: './petedit.component.html',
  styleUrls: ['./petedit.component.css']
})
export class PeteditComponent implements OnInit {
  id:any;
  one_pet:any;
  error:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.one_pet ={ name: "", type: "", description: "", skills: ["","",""]}
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    this.showPet();
  }
  showPet() {
    let pet = this._httpService.get_One(this.id);
    pet.subscribe(data => {
      console.log("Got one pet", data);
      this.one_pet = data['task'];
    })
  }

  Update_Pet(id) {
    let toupdate = this._httpService.update_One(id,this.one_pet);
    toupdate.subscribe(data => {
      if (data['error']) {
        console.log("Got errors", data["error"].errors); 
        this.error = data["error"].errors;
      } else {   
        this.one_pet ={ name: "", type: "", description: "", skills: ["","",""]}    
        this._router.navigate(['/pets']);     
      }
    })
  }

}
