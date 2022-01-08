import React from 'react';
import {FilterProvider} from './filter/FilterContext'
import { Filter } from './filter/Filter';
import { List } from './List';


function App() {


  return (
    <FilterProvider>
          <div className="container pt-4">
            <Filter />
            <List/>
          </div>
    </FilterProvider>
  );
}

export default App;
