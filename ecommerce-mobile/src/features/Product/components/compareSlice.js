import { createSlice } from '@reduxjs/toolkit';

let compareItemStore = [];

if (localStorage.getItem('compare')) compareItemStore = JSON.parse(localStorage.getItem('compare'));

const compareSlice = createSlice({
  name: 'compare',
  initialState: {
    showMiniCompare: true,
    compareItems: compareItemStore,
  },
  reducers: {
    showMiniCompare(state) {
      state.showMiniCompare = true;
    },

    hideMiniCompare(state) {
      state.showMiniCompare = false;
    },

    addToCompare(state, action) {
      const newItem = action.payload;
      const index = state.compareItems.findIndex((x) => x.idp === newItem.idp);
      if (index >= 0) {
        return;
      } else {
        state.compareItems.push(newItem);
      }
      localStorage.setItem('compare', JSON.stringify(state.compareItems));
    },

    removeFromCompare(state, action) {
      const idNeedToRemove = action.payload;
      state.compareItems = state.compareItems.filter((x) => x.idp !== idNeedToRemove.idp);
      localStorage.setItem('compare', JSON.stringify(state.compareItems));
    },

    removeAll(state) {
      localStorage.removeItem('compare');
      state.current = {};
      state.compareItems = [];
    },
  },
});

const { actions, reducer } = compareSlice;
export const { showMiniCompare, hideMiniCompare, addToCompare, removeFromCompare, removeAll } =
  actions;
export default reducer;
