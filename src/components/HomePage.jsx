import React,{useEffect,useState} from "react";
import { useDispatch } from "react-redux";
import { addData} from '../features/dataSlice';
import ProductCard from "./ProductCard"
import {Grid}from '@mui/material';

const HomePage=()=>{
    const dispatch= useDispatch();
    const [datas, setDatas] = useState([]);
   
    useEffect(()=>{
        getApiData()
    dispatch(addData(datas))
    },[datas,dispatch])

    const getApiData = async () => {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        ).then((response) => response.json())
        .then((response)=>setDatas(response)); 
      };
    return(
        <Grid container>
            <ProductCard/>
        </Grid>
    )
}
export default HomePage;