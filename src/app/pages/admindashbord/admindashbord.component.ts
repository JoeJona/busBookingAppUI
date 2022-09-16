import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantModel } from 'src/app/models/restaurant.model';
import { AdmindashbordService } from 'src/app/services/admin-dashboard-service';

@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.component.html',
  styleUrls: ['./admindashbord.component.css']
})
export class AdmindashbordComponent implements OnInit {

  restaurants: RestaurantModel[] = [];
  displayedColumns: string[] = ['id', 'name', 'active', 'action'];

  constructor(private service: AdmindashbordService, 
    private route: ActivatedRoute,
    private router: Router,) { }

   showPendingRestaurant = () => {
    this.service.getPendingRestaurant().subscribe((response) => {
      this.restaurants = response['content'];
    });
  }

  approveRestaurant(id: number, isApprove: boolean) {
    this.service.approvePendingRestaurant(id, isApprove).subscribe();
      window.location.reload();
  }

  featureRestaurant(id: number, isFeature: boolean) {
    this.service.featuredRestaurant(id, isFeature).subscribe();
      window.location.reload();
  }

  deleteRestaurant(id: number){
    this.service.deleteRestaurant(id).subscribe();
    window.location.reload();
  }

  ngOnInit() {
    this.showPendingRestaurant();
  }

}
