import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantModel } from 'src/app/models/restaurant.model';
import { AdmindashbordService } from 'src/app/services/admin-dashboard-service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  restaurants: RestaurantModel[] = [];

  constructor(private service: AdmindashbordService, 
    private route: ActivatedRoute,
    private router: Router,) { }

  showUserRestaurants = () => {
    this.service.getUsersRestaurants().subscribe((response) => {
      this.restaurants = response['content'];
      console.log(this.restaurants);            
    });
  }

  ngOnInit(): void {
    this.showUserRestaurants()
  }

}
