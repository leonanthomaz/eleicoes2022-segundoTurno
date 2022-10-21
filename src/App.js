import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import { useEffect, useState } from "react";
import axios from "axios";

export const App = () => {
  const [ data, setData ] = useState([])

  console.log(data.map(i => i.ht))

  useEffect(()=>{
    const loadData = async () => {
      // await axios.get('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json').then((response)=>{
      await axios.get('https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json').then((response)=>{
        console.log('setData2',response.data)
        setData([response.data])
      })
    }
    loadData()
  },[])

  return (
    <div className="app">
      <GlobalStyles/>
      <Header/>
      <Card data={data}/>
      <Footer/>
    </div>
  );
}

