import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, CountryPicker, Chart } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import coronaImage from './images/image.png'

class App extends React.Component {
  
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country })

  }

  render() {
    const { data, country } = this.state

    return (
      <div className={styles.container}>
        <h2>made by BORIS IVANISEVIC</h2>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <br />
        <Cards data={data} />
        <br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;


// https://www.youtube.com/watch?v=khJlrj3Y6Ls 01:21:00 STAO KOD  npm install --save chart.js