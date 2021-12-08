import { createAction, createReducer, on } from '@ngrx/store';

export const productReducer = createReducer(
  { showProductcode: true },
  on(createAction('[Product]Toggle Product Code'), (state) => {
    console.log(JSON.stringify(state));

    return {
      ...state,
      showProductcode: !state.showProductcode,
    };
  })
);
