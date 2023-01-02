import { IPointOfInterest } from "./pointofinterestdetails";

export interface ICityDetail{
    cityId: number;
    cityName: string;
    description: string;
    pointsOfIntrest:IPointOfInterest
}