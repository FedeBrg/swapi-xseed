import '../App.css'
import { useFetchCharactersQuery } from '../features/characters/characters-slice'
import { useState } from 'react'


import { Button, CircularProgress, CssBaseline, Stack, Typography } from '@mui/material'
import CharacterListItem from '../components/CharacterListItem'
function Characters() {

  const [page, setPage] = useState(1);
  const { data, isFetching} = useFetchCharactersQuery(String(page));


  return (
    <div className="App" style={{marginTop:20, marginBottom:10}}>
        <div>
          {isFetching && <CircularProgress color='secondary'/>}
          {data?.results.map((character) => (
            <CharacterListItem character={character} />
          ))}
        </div>
        <Stack spacing={4} direction="row"     justifyContent="space-evenly">
        {data?.previous && <Button onClick={() => setPage(page-1)}  color="secondary" variant="outlined">Prev</Button>}
        {data?.next && <Button onClick={() => setPage(page+1)}  color="secondary" variant="outlined">Next</Button>}
        </Stack>


    </div>
  )
};



export default Characters;
