import React from 'react';
import { useFilter } from './filter/FilterContext';

export const List = () => {

    const {data} = useFilter()

    return (
        <div className="row align-items-md-stretch">
            <div className="col-md-10">
                <div className="h-100 p-5 bg-light border rounded-3">
                <h2>Results:</h2>
                {data.map((item, i) => <p key={i}>{i+1}. ({item.userId}) {item.title}</p>)}
                </div>
            </div>
        </div>
    )
}