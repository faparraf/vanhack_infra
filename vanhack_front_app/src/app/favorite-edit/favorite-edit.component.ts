import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-favorite-details',
  templateUrl: './favorite-edit.component.html',
  styleUrls: ['./favorite-edit.component.css']
})

export class FavoriteEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  favoriteData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.restApi.getFavorite(this.id).subscribe((data: {}) => {
      this.favoriteData = data;
    });
  }

  // Update Favorite data
  updateFavorite() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateFavorite(this.id, this.favoriteData).subscribe(data => {
        this.router.navigate(['/favorite-list']);
      });
    }
  }

}
