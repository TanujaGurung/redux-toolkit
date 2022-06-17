import React from "react";
// import { useDispatch } from "react-redux";
// import { addData} from '../features/dataSlice';
import ProductCard from "./ProductCard"
import {Grid}from '@mui/material';
// import { useGetProductsQuery } from "../services/product";

const HomePage=()=>{
    return(
        <Grid container>
            <ProductCard/>
        </Grid>
    )
}
export default HomePage;