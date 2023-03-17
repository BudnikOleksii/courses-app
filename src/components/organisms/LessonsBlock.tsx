import { FC, useState } from 'react';
import { ILesson } from '../../types/course';
import { GridContainer } from '../atoms/GridContainer';
import { LessonCard } from './LessonCard';
import Grid from '@mui/material/Grid';
import { VideoBlock } from './VideoBlock';

type Props = {
  lessons: ILesson[];
};

export const LessonsBlock: FC<Props> = ({ lessons }) => {
  const [currentVideo, setCurrentVideo] = useState(lessons[0].link);

  return (
    <GridContainer>
      <Grid item xs={12}>
        <VideoBlock link={currentVideo} />
      </Grid>

      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </GridContainer>
  );
};
