import React, { useEffect, useState } from 'react';
import './rate-modal-component.scss';
import close from '../../assets/images/close.png';
import food from '../../assets/images/food.png';
import logo from '../../assets/images/logo.png';
import { defaultRates, RateReviewType, RateStatusType, RateType } from './types';
import ReviewComponent from '../review-component/review-component';
import RateInputComponent from '../rate-input-component/rate-input-component';
import { GetSavedData, SaveReviewAndRate } from '../../services/rate-review-service';

function RateModalComponent() {
    const [rates, setRates] = useState<RateType[]>(defaultRates);
    const [rateStatus, setRateStatus] = useState<RateStatusType>(RateStatusType.noRate);
    const [showModal, setShowModal] = useState<boolean>(false);
    useEffect(() => {
        if (!GetSavedData()) {
            setShowModal(true);
        }
    }, [])


    const handleRateChange = (id: number, value: string) => {
        const prevRates = rates.map(a => {
            if (a.id === id) {
                a.value = Number(value)
            }
            return a;
        })
        setRates([...prevRates]);

    }
    const renderRateComponents = () => {
        return rates.map(rate => {
            return <RateInputComponent key={rate.id} data={rate} handleChange={handleRateChange} />
        })
    }

    const onRateNext = () => {
        setRateStatus(RateStatusType.Rate);
    }

    const onReviewSubmit=(data:RateReviewType)=>{
       const res = SaveReviewAndRate(data);
       if(res){
        alert('Rate and review saved successfuly');
       }
       setShowModal(false);
    }

    const renderReviewContent = () => {
        return <ReviewComponent rates={rates} onSubmit={onReviewSubmit} onBack={() => { setRateStatus(RateStatusType.noRate) }} />;
    }

    const renderRateContent = () => {
        let found = rates.find(a => a.value === 0 && a.id !== 1);
        return <div>
            Rate your experience
            {
                renderRateComponents()
            }
            <button type='button' className='rate-btn' disabled={found != undefined ? true : false} onClick={onRateNext}>Next</button>
        </div>
    }
    if (showModal) {
        return (
            <div className="modal">
                <div className="modal-body">
                    <div className='close'>
                        <img src={close} alt='close' onClick={() => { setShowModal(false) }} />
                    </div>
                    <div className="content">
                        <div className="header">
                            <div className="header-text">
                                <span className='bigger-text'>Bombay Dreams</span>
                                <br />
                                <span className='smaller-text'>How was your experience</span>

                            </div>

                            <img src={food} alt='food' />
                        </div>
                        <div className='logo'>
                            <img src={logo} alt='logo' />
                        </div>

                    </div>
                    <div className="content">
                        {rateStatus === 0 ? renderRateContent() : renderReviewContent()}
                    </div>

                </div>
            </div>
        );
    }
    return null;
}

export default RateModalComponent;
