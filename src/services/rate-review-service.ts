import { RateReviewType } from "../components/rate-modal-component/types";

export const SaveReviewAndRate = (data: RateReviewType): boolean => {
    console.log('submitted data', data);
    let storageData = localStorage.getItem('rateReview');
    if (!storageData) {
        localStorage.setItem('rateReview', JSON.stringify(data));
    }
    return true;
}


export const GetSavedData = (): string => {
    return localStorage.getItem('rateReview') || '';
}