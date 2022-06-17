import React from "react";
import {Card,Grid, CardContent,CardMedia,Typography,Box}from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextTruncate from "react-text-truncate";
import {Link} from "react-router-dom"
import { useAddProductMutation, useGetProductsQuery } from "../services/product";

const ProductCard=()=>{
  const { data, isLoading }= useGetProductsQuery()
    const [ addProduct ] = useAddProductMutation() 

  const handlePost = async()=>{
    try
    {
      const response = await addProduct({
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://th.bing.com/th/id/OIP.Sx-9v6F1m1Wx5SQKfP8OPAHaG0?w=222&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      category: 'electronic'
     })
     alert("successfully added fake product with id " + response.data.id)
    }
    catch(err){
   console.log(err)
    }
    
  }
    return( <>
    <Grid container justifyContent="center">
      <Grid item><Button variant="outlined" onClick = {handlePost}>Add Fake Product</Button></Grid>
    </Grid>

    <Grid container rowSpacing={4} columnSpacing={4} mt={2}>
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
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
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
    </>
   )
}
export default ProductCard;