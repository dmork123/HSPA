import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propretyId!: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propretyId = +this.route.snapshot.params['id'];
    // this function below will change when the params value change
    this.route.params.subscribe(
      (params) => {
        this.propretyId = +params['id']
      }
    )
  }
  onSelectedNext() {
    this.propretyId += 1;
    this.router.navigate(['property-detail', this.propretyId]);
  }

}
