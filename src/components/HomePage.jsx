import React from "react";
// import { useDispatch } from "react-redux";
// import { addData} from '../features/dataSlice';
import ProductCard from "./ProductCard"
import {Grid}from '@mui/material';
// import { useGetProductsQuery } from "../services/product";

const HomePage=()=>{
    // const dispatch= useDispatch();
    //const [datas, setDatas] = useState([]);
    //const { data, error, isLoading } =useGetProductsQuery()
   
//     useEffect(()=>{
//    // dispatch(addData(data))
//     },[data,dispatch])

    // const getApiData = async () => {
    //     const { data, error, isLoading } =useGetProductsQuery()
    // //     const response = await fetch(
    // //       "https://fakestoreapi.com/products"
    // //     ).then((response) => response.json())
    // //     .then((response)=>setDatas(response)); 
    //    };
    return(
        <Grid container>
            <ProductCard/>
        </Grid>
    )
}
export default HomePage;