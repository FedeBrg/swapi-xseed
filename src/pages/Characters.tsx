import '../App.css'
import { useFetchCharactersQuery } from '../features/characters/characters-slice'
import { useState } from 'react'
import { Box, Button, CircularProgress, Stack } from '@mui/material'
import CharacterListItem from '../components/CharacterListItem'
function Characters() {

  const [page, setPage] = useState(1);
  const { data, isFetching} = useFetchCharactersQuery(String(page));


  return (
    <Box className="App" style={{marginTop:40, marginBottom:10}}>
        <Box>
          {isFetching && <CircularProgress color='secondary'/>}
          {data?.results.map((character) => (
            <Box key={character.name}>
            <CharacterListItem character={character} />

            </Box>
          ))}
        </Box>
        <Stack spacing={4} direction="row" justifyContent="space-evenly">
        {data?.previous && <Button onClick={() => setPage(page-1)}  color="secondary" variant="outlined">Prev</Button>}
        {data?.next && <Button onClick={() => setPage(page+1)}  color="secondary" variant="outlined">Next</Button>}
        </Stack>

    </Box>
  )
};



export default Characters;
