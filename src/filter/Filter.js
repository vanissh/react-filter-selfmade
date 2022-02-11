import React from 'react';
import { useFilter } from './FilterContext';

export const Filter = () => {

    const {checkboxes, handleChange, checkedItems, data} = useFilter()

    console.log(data)
    return (
        <>
            {checkboxes.map(item => (
                <div className="form-check" key={item.key}>
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        name={item.name}
                        onChange={handleChange} 
                        checked={checkedItems[item.name]}/>
                    <label className="form-check-label">
                    {item.label}
                    </label>
                </div>
            ))}
        </>
    )
}