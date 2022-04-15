
import { useNavigate } from 'react-router-dom'
import React from 'react';
import breweryInfo from '../services/breweryInfo';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material'
import Paper from '@mui/material/Paper';


const BreweryCard = (props) => {
    // setting a variable for the funcion useNavigate to use later in app
    const navigate = useNavigate();

    //Below will be code to set the url for an image inside of our brewery card
    let imageURL = '';
    
    breweryInfo.map( (el) => { 
          (el.type === props.type) ? 
            imageURL = el.pictureOne 
             : 
            console.log('There is no image to display.');
      })

    return (
        <div className='details' key={props.id}>

            {
                (imageURL === '') ? <p>There is no image to display.</p> :
        <Stack spacing={4} key={props.id} direction='row'>
             <Paper elevation={16} />
           
        <Card sx={{ 
            maxWidth: 490,
            height:670
            }} >
      <CardMedia
        component="img"
        height="570"
        image={imageURL}
        alt="beer pic"
      />
      <CardContent>
        <Typography variant="h5" component="div" color=''>
        {props.name}
        </Typography>
      </CardContent>
        <Button size="small" onClick={()=>navigate(`/brewery/${props.name}`)} variant='outlined' color='error' > See More </Button>
      
    </Card>
    </Stack>
            }
            
        </div>
    );
};

export default BreweryCard;

