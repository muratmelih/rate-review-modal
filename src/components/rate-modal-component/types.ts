export interface RateType {
    id:number;
    title: string;
    value: number;
}

export const defaultRates: RateType[] = [
    {
        id:1,
        title: 'Delivery Speed',
        value: 0
    }, 
    {
        id:2,
        title: 'Food Taste',
        value: 0
    },
    {
        id:3,
        title: 'Service',
        value: 0
    },
]

export enum RateStatusType {
    noRate = 0,
    Rate = 1,
    RateAndReview = 2,
  }