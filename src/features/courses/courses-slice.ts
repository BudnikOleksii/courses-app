import { createSlice } from '@reduxjs/toolkit';
import { Maybe } from '../../types/helper-types';
import { ICourse } from '../../types/course';

interface CoursesState {
  courses: Maybe<ICourse[]>;
}

const initialState: CoursesState = {
  courses: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    coursesLoadingStart: (state) => {},
    coursesSuccess: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { coursesLoadingStart, coursesSuccess } = coursesSlice.actions;

export default coursesSlice.reducer;
