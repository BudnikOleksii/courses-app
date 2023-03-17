import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectCourses } from '../features/courses/courses-selectors';
import { registerAction } from '../features/actions-info/actions-info-slice';
import { courseLoadingStart } from '../features/courses/courses-slice';
import { selectIsActionInProcess } from '../features/actions-info/actions-info-selector';
import Box from '@mui/material/Box';
import { CourseCard } from '../components/organisms/CourseCard';
import { LessonsBlock } from '../components/organisms/LessonsBlock';

const Course = () => {
  const { courseId = '' } = useParams();
  const dispatch = useAppDispatch();
  const { selectedCourse } = useAppSelector(selectCourses);
  const isLoading = useAppSelector(selectIsActionInProcess(courseLoadingStart.type));

  useEffect(() => {
    if (courseId) {
      dispatch(registerAction(courseLoadingStart.type));
      dispatch(courseLoadingStart({ courseId }));
    }
  }, [courseId]);

  return (
    <>
      {selectedCourse && !isLoading && (
        <Box component="section">
          <CourseCard course={selectedCourse} />
          <LessonsBlock lessons={selectedCourse.lessons} />
        </Box>
      )}

      {!selectedCourse && !isLoading && <p>NOT FOUND</p>}
    </>
  );
};

export default Course;
