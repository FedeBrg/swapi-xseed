import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../models/Character";

interface CharacterState {
    favourites: Character[]
}

const initialState: CharacterState = {
    favourites: []
};


const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        favourite(state, action: PayloadAction<Character>) {
            if (state.favourites.find(character => character.name === action.payload.name) === undefined) { 
                state.favourites.push(action.payload); 
            }        
        },
        unfavourite(state, action: PayloadAction<Character>) {
            state.favourites = state.favourites.filter(character => character.name != action.payload.name)
        },

    }
});


export const { favourite, unfavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;