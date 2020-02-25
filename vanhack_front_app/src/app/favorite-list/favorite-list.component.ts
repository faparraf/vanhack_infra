import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  Favorite: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadFavorites();
  }

  // Get Favorites list
  loadFavorites() {
    return this.restApi.getFavorites().subscribe((data: {}) => {
      this.Favorite = data;
      console.log(data);
    });
  }

  // Delete Favorite
  deleteFavorite(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteFavorite(id).subscribe(data => {
        this.loadFavorites();
      });
    }
  }

}
