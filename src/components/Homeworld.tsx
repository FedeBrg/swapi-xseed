import { useFetchPlanetQuery } from "../features/characters/characters-slice";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Chip } from "@mui/material";

interface HomeworldProps{
    id:string
}

 export function Homeworld({id}:HomeworldProps): JSX.Element{
    
    const { data } = useFetchPlanetQuery(id.split("/")[5]);


    return (
        <Chip icon={<LocationOnIcon />} label={data?.name} color="secondary" variant="outlined" />

    );
}