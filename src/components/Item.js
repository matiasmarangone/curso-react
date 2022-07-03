import React from 'react'
import ReactDOM from 'react-dom'
import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
          <Card sx={{ maxWidth: 3458 }}>
        <CardMedia
          component="img"
          height="180"
          image={pictureUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <strong>$ {price}</strong> <br></br>
          {stock} unidades en stock
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><Link to={`/item/${id}`}>Ver producto</Link></Button>
        </CardActions>
      </Card>
        </ProductContainer>
        
    );
}

export default Item;