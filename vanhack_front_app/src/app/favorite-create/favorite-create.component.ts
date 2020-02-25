import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-favorite-create',
  templateUrl: './favorite-create.component.html',
  styleUrls: ['./favorite-create.component.css']
})
export class FavoriteCreateComponent implements OnInit {

  @Input() favoriteDetails = { Name: '', Color: '', Animal: '' };

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() { }

  addFavorite(dataFavorite) {
    this.restApi.createFavorite(this.favoriteDetails).subscribe((data: {}) => {
      this.router.navigate(['/favorite-list']);
    });
  }

}
