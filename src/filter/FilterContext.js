import React, {useEffect, useRef} from 'react';

const FilterContext = React.createContext()

export const useFilter = () => {
    return React.useContext(FilterContext) //получаем объект value 
}
const url = `https://jsonplaceholder.typicode.com/posts`
//в value массив чекбоксов, функцию для обработки кликов
export const FilterProvider = ({children}) => {

    const checkboxes = [
        {
            name: 1,
            key: 'userID1',
            label: 'User ID: 1'
        },
        {
            name: 2,
            key: 'userID2',
            label: 'User ID: 2'
        },
        {
            name: 3,
            key: 'userID3',
            label: 'User ID: 3'
        },
        {
            name: 4,
            key: 'userID4',
            label: 'User ID: 4'
        },
    ]

    const initialState = Object.fromEntries(checkboxes.map(item => [item.name, false])) //двумерный массив преобразуем в объект
    const [checkedItems, setCheckedItems] = React.useState(initialState)
    const [data, setData] = React.useState([])
    const newData = useRef(data)

    const handleChange = (event) => {
        // updating an object instead of a Map
        setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });   
    }

    const getData = () => {
        fetch(url)
        .then(response => response.json())
        .then(json => setData(json))
    }

    const filterData = () => {
        newData.current = []
        const keys = Object.keys(checkedItems).filter(key => checkedItems[key] ===true)
        keys.forEach(key => {
            newData.current.push(data.filter(item => item.userId === +key))
        })
        return newData.current.flat()
    }

    useEffect(getData, [])

    useEffect(filterData, [checkedItems, data])

    return (
        <FilterContext.Provider value={{
            checkboxes, handleChange, checkedItems, data: filterData()
        }}>
            {children}
        </FilterContext.Provider>
    )
}