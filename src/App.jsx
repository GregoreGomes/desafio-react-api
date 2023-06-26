import { useState } from 'react'
import './App.scss'
import DataDisplay from './components/DataDisplay/DataDisplay';
import Header from './components/header/header';
import Filter from './components/filter/Filter';
import SkeletonLoading from './components/skeletonLoading/SkeletonLoading';

function App() {

  return (
      <>
        <Header />
        <Filter />
      </>
  )
}

export default App
