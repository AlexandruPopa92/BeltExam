import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-petdetail',
  templateUrl: './petdetail.component.html',
  styleUrls: ['./petdetail.component.css']
})
export class PetdetailComponent implements OnInit {
  id:any;
  one_pet:any;
  liked = true;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.one_pet = {}
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    this.showPet()
  }

  showPet() {
    let pet = this._httpService.get_One(this.id);
    pet.subscribe(data => {
      console.log("Got one pet", data);
      this.one_pet = data['task'];
    })
  }

  Delete(id){
    let pet = this._httpService.delete_One(id);
    pet.subscribe(data => {  
      this._router.navigate(['/pets']);     
    })
  }
  Like(id){
    if(this.liked == true){
      this.liked = false;
      this.one_pet.likes +=1;
      let toupdate = this._httpService.update_One(id,this.one_pet);
      toupdate.subscribe(data => {})
      this.showPet();
    }
    
  }

}
