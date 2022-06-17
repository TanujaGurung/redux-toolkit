import React from "react";
import { useGetProductByIdQuery } from "../services/product";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { CardActionArea, CardActions } from "@mui/material";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const state = location.state + 1;

  const { data, isLoading } = useGetProductByIdQuery(state.toString());

  return (
    <>
      This is Detail Page
      <div>
        {isLoading ? (
          <>Data fetching... </>
        ) : (
          <Grid container justifyContent="center" mt={2}>
            <Grid item >
            <Box>
              <Card sx={{ maxWidth: 400}}>
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
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    ></Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.rating.rate}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.price}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
            </Box>
            </Grid>
          </Grid>
        )}
      </div>
    </>
  );
};
export default DetailPage;
