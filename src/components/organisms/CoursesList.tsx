import { FC } from 'react';
import { ICourse } from '../../types/course';
import { CourseCard } from './CourseCard';
import Grid from '@mui/material/Grid';

interface Props {
  courses: ICourse[];
}

export const CoursesList: FC<Props> = ({ courses }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 3, p: 3 }}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Grid>
  );
};
