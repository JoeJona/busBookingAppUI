import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantModel } from 'src/app/models/restaurant.model';
import { AdmindashbordService } from 'src/app/services/admin-dashboard-service';

@Component({
  selector: 'app-approverestaurantpage',
  templateUrl: './approverestaurantpage.component.html',
  styleUrls: ['./approverestaurantpage.component.css'],
})
export class ApproverestaurantpageComponent implements OnInit {
  rid: number;
  restaurant = new RestaurantModel();
  restaurants: RestaurantModel[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AdmindashbordService
  ) {}

  ngOnInit(): void {
    this.rid = this.route.snapshot.params['id'];
    this.service.getRestaurantDetail(this.rid).subscribe((response: any) => {
      this.restaurant = response;
      console.log(this.restaurant.restaurantImageEntities);
      
    });
  }

  approveRestaurant(id: number, isApprove: boolean) {
    this.service.approvePendingRestaurant(id, isApprove).subscribe((response: any) => {});
    this.router.navigate(['/admin-dashboard']).then(() => {
      // alert('Restaurant Approved');
      window.location.reload();
    });
  }
}
