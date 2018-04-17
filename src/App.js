import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import './App.css'
import DataRange from './Components/DataRange';
import NumberBox from './Components/NumberBox';
import RangeSlider from './Components/RangeSlider';
import ResultCard from './Components/ResultCard';


class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="housing"
          credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
          type="listing"
          theme={{
            primaryColor: '#FF3A4E',
        }}
        >
        <nav className="nav">
                <div className="title">airbeds</div>
        </nav>
          <div className="left-col">
            <DataRange />
            <NumberBox />
            <RangeSlider />
            <ResultCard />
          </div>
        </ReactiveBase>
      </section>
    );
  }
}
export default App;
