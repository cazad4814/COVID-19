import React, { Component } from 'react';
import Info from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker"
import styles from "../src/App.module.css"
import coronaimage from "./images/image.png"
import { fetchData } from "./api"

class App extends Component {
state ={
  data: {},
  country: '',
}
  async componentDidMount(){
  const fetchData1= await fetchData();
  this.setState({data:fetchData1});
   }
 
   handleCountryChange = async(country) =>{
     const fetchedData= await fetchData(country);
     this.setState({data:fetchedData, country:country});
 


   }
render(){
  const { data, country } = this.state;
  
  return (

    <div className={styles.container}>
    <img className={styles.image} src={coronaimage} />
    <Info data={data}/>
    <CountryPicker handleCountryChange={this.handleCountryChange} />
    <Chart data={data} country={country}/>
   
    </div>
  );
}
}

export default App;
