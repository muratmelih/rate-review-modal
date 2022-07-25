import React, { useEffect, useState } from 'react';
import { RateType } from '../rate-modal-component/types';
import './rate-input-component.scss';

function RateInputComponent(props: any) {
    return (
        <div className="rate">
            <span className={`tooltiptext left-${props.data.value} ${Number(props.data.value) > 5 ? "success" : "fail"}`}>{props.data.value}</span>
            <input type="range" className={`${Number(props.data.value) > 5 ? "success" : "fail"}`} name="points" min="0" max="10" step="1" value={props.data.value} onChange={(e) => props.handleChange(props.data.id, e.target.value)}></input>
            <span>Okay</span>
            <span className="align-right">Excelent</span>
        </div>
    );
}

export default RateInputComponent;
