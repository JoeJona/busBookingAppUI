import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
  })
export class AdmindashbordService {

private publicBaseUrl: string;
private statisticsUrl: string;
private restaurantUrl: string;

private user: any;

  constructor(private httpClinet: HttpClient) {
    this.publicBaseUrl = environment.basePublicUrl;
    this.statisticsUrl = environment.baseStatisticsUrl;
    this.restaurantUrl = environment.baseRestaurantUrl;
  }

  public getPendingRestaurant() {
    let data = localStorage.getItem('user')
    this.user = JSON.parse(data)
    return this.httpClinet.get(this.statisticsUrl+"/all", {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.user.token}`,
        'pid' : this.user.pid,
      }),
      params : new HttpParams().set('page', 0).set('size', 10).set('sort', 'id,desc'),
    });
  }

  public approvePendingRestaurant(id: number, isApprove: boolean) {
    let data = localStorage.getItem('user')
    this.user = JSON.parse(data)
    return this.httpClinet.get(this.statisticsUrl+'/pending-for-approve/'+ id, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.user.token}`,
        'pid' : this.user.pid,
      }),
      params : new HttpParams().set('isApprove', isApprove),
    });
  }

  public featuredRestaurant(id: number, isFeature: boolean) {
    let data = localStorage.getItem('user')
    this.user = JSON.parse(data)
    return this.httpClinet.get(this.statisticsUrl+'/set-featured/'+ id, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.user.token}`,
        'pid' : this.user.pid,
      }),
      params : new HttpParams().set('isFeature', isFeature),
    });
  }

  getRestaurantDetail(id: number) {
    return this.httpClinet.get(this.publicBaseUrl+"/restaurant/"+ id);
   }

   deleteRestaurant(id: number) {
    return this.httpClinet.delete(this.restaurantUrl+"/"+ id, {
      headers: new HttpHeaders({
        'pid' : this.user.pid,
      }),
    });
   }

   getUsersRestaurants() {
    let data = localStorage.getItem('user')
    this.user = JSON.parse(data)
    return this.httpClinet.get(this.restaurantUrl+'/all-users', {
      headers: new HttpHeaders({
        'pid' : this.user.pid,
      }),
      params : new HttpParams().set('page', 0).set('size', 9),
    })
   }

}