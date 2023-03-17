import { FC } from 'react';
import { ILesson } from '../../types/course';
import { GridContainer } from '../atoms/GridContainer';
import { LessonCard } from './LessonCard';

type Props = {
  lessons: ILesson[];
};

export const LessonsBlock: FC<Props> = ({ lessons }) => {
  return (
    <GridContainer>
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </GridContainer>
  );
};
