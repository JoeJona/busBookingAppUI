import { RestaurantImageModel } from "./restaurantImages";

export class RestaurantModel {
    public id: number;
    public name: string;
    public tag: string;
    public phoneNumber: string;
    public description: string;
    public rate: number;
    public isActive: boolean;
    public isApproved: boolean;
    public isFeature: boolean;
    public restaurantImageEntities: RestaurantImageModel[];
}