import React from "react";
import { useGetProductByIdQuery } from '../services/product';
import {Card,Grid, CardContent,CardMedia,Typography,Box}from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useLocation} from "react-router-dom"

const DetailPage=()=>{
    const location = useLocation();
  const state = location.state + 1;

    const { data, error, isLoading } =useGetProductByIdQuery(state.toString())
   
    return(<>
    This is Detail Page
    <div>
    {isLoading ? <>Data fetching... </> : <><Box>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Box>
        <CardMedia
          component="img"
          height="300"
          image={data.image}
          alt="green iguana"
        />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
         
          </Typography>
            <Typography variant="body2" color="text.secondary">{data.rating.rate}</Typography>
            <Typography gutterBottom variant="h5" component="div">
           {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
     
      </CardActions>
    </Card>
            </Box></>}
    </div>
  
    </>)
}
export default DetailPage;