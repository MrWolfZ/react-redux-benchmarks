import { createSlice } from "redux-starter-kit";
import * as c from "./constants";

const { reducer, actions } = createSlice({
  initialState: {
    counters: {},
    slices: []
  },
  reducers: {
    initialize(state, action) {
      const { numberOfCounters } = action.payload;
      for (let i = 0; i < numberOfCounters; i++) {
        state.counters[i] = 0;
      }

      state.slices = Object.keys(state.counters).map(key => Number(key));
      state.slices.sort();
    },
    increment(state, action) {
      const { counterId } = action.payload;
      const value = state.counters[counterId] || 0;
      state.counters[counterId] = value + 1;
    },
    incrementMany(state, action) {
      const { mod } = action.payload;
      for (let counterId = 0; counterId < c.NUMBER_OF_SLICES; counterId++) {
        if (counterId % mod === 0) {
          const value = state.counters[counterId] || 0;
          state.counters[counterId] = value + 1;
        }
      }
    }
  }
});

export const { initialize, increment, incrementMany } = actions;

export function incrementRandomCounter() {
  const counterId = Math.floor(Math.random() * c.NUMBER_OF_SLICES);
  return increment({ counterId });
}

export default reducer;
