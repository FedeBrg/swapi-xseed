import '../App.css'
import { useAppSelector } from '../app/hooks'
import { Character } from '../models/Character'
import { useState } from 'react'
import { Grid, TextField } from '@mui/material'
import CharacterListItem from '../components/CharacterListItem'

function Favourites() {

  const [searchFav, setSearchFav] = useState("");
  const favourites = useAppSelector((state) => state.favourites.favourites);
  const filterFavourites = applyFilters(favourites,searchFav);

  return (
      <Grid
        container
        direction="column"
        alignItems="stretch"
        marginTop={5}
        width='100vw'
        minHeight='90vh'
      >
        <Grid item >
      <TextField focused fullWidth color="secondary" id="outlined-basic" label="Search"  value={searchFav} onChange={(event) => {setSearchFav(event.target.value)}} />
      </Grid>
          {filterFavourites.map((character) => (
            <CharacterListItem character={character} />
          ))}
    </Grid>

  )
};


export default Favourites;


function applyFilters(favourites:Character[], search:string): Character[]{
  return favourites.filter((character) => character.name.toLowerCase().includes(search.toLowerCase()));
}