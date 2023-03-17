import { createSlice } from '@reduxjs/toolkit';
import { Maybe } from '../../types/helper-types';
import { ICourse, ICourseResponse } from '../../types/course';

interface CoursesState {
  courses: Maybe<ICourse[]>;
  selectedCourse: Maybe<ICourseResponse>;
}

const initialState: CoursesState = {
  courses: null,
  selectedCourse: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    coursesLoadingStart: (state) => {},
    coursesSuccess: (state, action) => {
      state.courses = action.payload;
    },
    courseLoadingStart: (state, action) => {},
    courseSuccess: (state, action) => {
      state.selectedCourse = action.payload;
    },
  },
});

export const {
  coursesLoadingStart,
  coursesSuccess,
  courseLoadingStart,
  courseSuccess,
} = coursesSlice.actions;

export default coursesSlice.reducer;
