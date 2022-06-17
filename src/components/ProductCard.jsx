import React from "react";
// import { useSelector } from "react-redux";
// import { dataSlice, selectData} from '../features/dataSlice';
import {Card,Grid, CardContent,CardMedia,Typography,Box}from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextTruncate from "react-text-truncate";
import {Link} from "react-router-dom"
import { useGetProductsQuery } from "../services/product";

const ProductCard=()=>{
  // console.log( useGetProductsQuery())
  const { data, error, isLoading, isSuccess }= useGetProductsQuery()
  console.log("error" , error)
    return( 
    <Grid container spacing={2} columnSpacing={2}>
    {isLoading ? (<>Loading ... </>):((data.map((el, id) => {
        return (
          <Grid item xs={12} md={3} key={id}>
            <Box>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Box>
        <CardMedia
          component="img"
          height="300"
          image={el.image}
          alt="green iguana"
        />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
          <TextTruncate
          line={1}
          truncateText="…"
          text= {el.title}
          textTruncateChild={<a href="#" style={{fontSize:'15px', textDecoration:'none'}}>view more</a>}
        />
          
          </Typography>
            <Typography variant="body2" color="text.secondary">{el.rating.rate}</Typography>
            <Typography gutterBottom variant="h5" component="div">
           {el.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link
        to={`/detail/${id}`} state={id}
        style={{ textDecoration: "none", width: "100%" }}
      ><span style={{float:"right"}}><Button size="small" color="primary">
          view Details
        </Button></span></Link>
        <Link
        to={`/cart`}
        style={{ textDecoration: "none", width: "100%" }}
      ><span style={{float:"right"}}><Button size="small" color="primary">
          Add to Cart
        </Button></span></Link>
      </CardActions>
    </Card>
            </Box>
          </Grid>
        );
      })))}
    </Grid>
   )
}
export default ProductCard;