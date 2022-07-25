import React, { useEffect, useState } from 'react';
import { SaveReviewAndRate } from '../../services/rate-review-service';
import { RateReviewType, RateType } from '../rate-modal-component/types';
import './review-component.scss';

function ReviewComponent(props: any) {
    const tags: string[] = ['Quality', 'Appearance', 'Texture', 'Portion Size', 'Flavor'];
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [review, setReview] = useState<string>('');

    const findAvg = () => {
        const total: number = props.rates.reduce((partialSum: number, a: RateType) => partialSum + a.value, 0);
        const avg: number = Math.ceil(total / props.rates.length);
        return avg;
    }
    const renderHeader = () => {


        if (findAvg() < 5)
            return 'Is there something wrong with your order?'
        return 'Would you like to share your satisfaction ?'
    }
    const selectTag = (tag: string) => {
        let found = selectedTags.findIndex(a => a === tag);
        if (found > -1) {
            selectedTags.splice(found, 1);
            const prevTags = [...selectedTags];
            setSelectedTags(prevTags);
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }
    const renderTags = () => {
        return <div className='tag-wrapper' >
            {
                tags.map(tag => {
                    return <div key={tag} className={`tag-label ${selectedTags.find(a => a === tag) ? 'selected' : 'not-selected'}`} onClick={() => { selectTag(tag) }}>{tag}</div>
                })
            }
        </div>
    }
    const SaveRateReview = () => {
        const saveData: RateReviewType = {
            rates: props.rates,
            tags: selectedTags,
            review: review
        }
        SaveReviewAndRate(saveData);
    }

    return (
        <div className="review">
            {
                renderHeader()
            }
            {

                renderTags()
            }
            <fieldset>
                <legend>
                    Feedback
                </legend>
                <textarea name="review" className='review-area' value={review} onChange={(e) => { setReview(e.target.value) }}></textarea>
            </fieldset>

            <button type='button' className='review-btn' disabled={false} onClick={SaveRateReview} >Submit</button>
            <button type='button' className='review-btn back' disabled={false} onClick={props.onBack}>Back</button>
        </div>
    );
}

export default ReviewComponent;
