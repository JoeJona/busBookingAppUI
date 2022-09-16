import { UserAddressModel } from "./user-address-model";

export class UserModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public userPassword: string;
    public roleSelected: string;
    public email: string;
    public isLocked: boolean;
    public isEnabled: boolean;
    public address: UserAddressModel;
    // public city: String;
    // public street:String;
    public userPublicId: string;

    public userName:string;
    
    constructor() { }
}