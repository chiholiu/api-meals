import React from 'react'
import { RandomMeals } from './RandomMeals/RandomMeals';
import ListMeals from './ListMeals/ListMeals';
import { SearchBar } from './SearchBar/SearchBar';
import { TopBar } from './TopBar/TopBar';
import SearchResult from './SearchResult/SearchResult';

export const AppComponent = () => (
  <div className="app-container">

      <TopBar/>
      
      <div className="app-mobile app-desktop-left">
        <RandomMeals/>
        <SearchBar/>
        <SearchResult/>
      </div>

      <div className="app-mobile app-desktop-right">
        <ListMeals/>
      </div>
  </div>
)
