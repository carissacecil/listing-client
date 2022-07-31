import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  getListing, selectListings
} from './listingSlice';
import styles from './Listing.module.css';

export function Listing() {
  const listings = useAppSelector(selectListings);
  const dispatch = useAppDispatch();

  const listingCards : any[] = [];
  
  listings.forEach(listing => {
    listingCards.push(
    <Grid item xs={4}>  
    <Card>
      <CardContent>
      <CardActionArea href={listing.detailLink}>
      <CardMedia
          component="img"
          height="140"
          image={listing.frontImage}
          alt="property image"
        />
      <Button size="small" href={listing.detailLink}>{listing.title}</Button>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {listing.location}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {listing.price}
      </Typography>
      </CardActionArea>
       </CardContent>
    </Card>
    </Grid>);

  })

  

  return (
    <div>
      <button
        className={styles.button}
        aria-label="Get Listings"
        onClick={() => dispatch(getListing())}
      >
        Get Listings
      </button>
      <div className={styles.row}>
        <Grid container spacing={2}>{listingCards}</Grid>
      </div>
    </div>
  );
}
