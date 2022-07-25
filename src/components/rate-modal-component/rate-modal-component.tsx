import React, { useState } from 'react';
import './rate-modal-component.scss';
import close from '../../assets/images/close.png';
import food from '../../assets/images/food.png';
import logo from '../../assets/images/logo.png';
import { defaultRates, RateStatusType, RateType } from './types';
import RateComponent from '../rate-component/rate-component';

function RateModalComponent() {
    const [rates, setRates] = useState<RateType[]>(defaultRates);
    const [rateStatus, setRateStatus] = useState<RateStatusType>(RateStatusType.noRate);

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
            return <RateComponent data={rate} handleChange={handleRateChange} />
        })
    }

    const onRateNext = () => {
        setRateStatus(RateStatusType.Rate);
    }

    const renderReviewContent = () => {
        return 'review';
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

    return (
        <div className="modal">
            <div className="modal-body">
                <div className='close'>
                    <img src={close} alt='close' />
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

export default RateModalComponent;
