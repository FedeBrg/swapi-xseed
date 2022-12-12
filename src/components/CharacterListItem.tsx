import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Character } from "../models/Character";
import { Homeworld } from "./Homeworld";

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { favourite, unfavourite } from "../features/favourites/favourites-slice";
import { Alert, Card, CardContent, CardHeader, Divider, Snackbar, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

interface CharacterProps {
    character: Character,
}

export default function CharacterListItem({ character }: CharacterProps){

    const dispatch = useAppDispatch();
    const favourites = useAppSelector((state) => state.favourites.favourites);
    const [openFav, setOpenFav] = useState(false);
    const [openUnfav, setOpenUnfav] = useState(false);


    const handleClick = (fav: boolean) => {
        if(fav){
            setOpenFav(true);
        }else{
            setOpenUnfav(true);
        }
      };
    
      const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenFav(false);
        setOpenUnfav(false);
      };
    
    const action = (
        <Fragment>
    
    <IconButton onClick={handleClose}>
                <CloseIcon color='secondary'/>
              </IconButton>
        </Fragment>
      );
    
    return (
        <Card style={{ border: "none", boxShadow: "none", textAlign:"left", padding:"10px", background:"#17141f",  borderRadius: 0, width:'95vw' }}>
            <CardHeader 
                style={{padding:"0"}}
                action={
                    renderButton(character)
                }
                title={character.name}
                subheader={<Typography > {character.gender} | {character.birth_year}</Typography>} />
          <CardContent style={{paddingLeft:"0"}}>
          
          <Homeworld id={character.homeworld}/>

          </CardContent>
                <Divider sx={{ bgcolor: "#3a314e", borderBottomWidth: 2 }}/>

                <Snackbar
                    open={openFav}
                    autoHideDuration={1000}
                    onClose={handleClose}
                    action={action} >
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Added to favourites
                        </Alert>
                </Snackbar>

                <Snackbar
                    open={openUnfav}
                    autoHideDuration={1000}
                    onClose={handleClose}
                    action={action} >
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            Removed from favourites
                        </Alert>
                </Snackbar>
        </Card>
      );
      

    function renderButton (c: Character){
        if (favourites.find(character => character.name === c.name) === undefined) { 
            return (<IconButton onClick={() => {dispatch(favourite(c));handleClick(true)}}><FavoriteBorderIcon fontSize="small" color="secondary"/></IconButton>)
        }   
            else{
        return(<IconButton onClick={() => {dispatch(unfavourite(c));handleClick(false)}}><FavoriteIcon fontSize="small" color="secondary"/></IconButton>)
        }
    }
}