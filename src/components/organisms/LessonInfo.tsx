import { FC, useState } from 'react';
import { ILesson } from '../../types/course';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LessonCard } from './LessonCard';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  lesson: ILesson;
  onCurrentChange: (lesson: ILesson) => void;
  activeLessonId: string;
};

export const LessonInfo: FC<Props> = ({ lesson, activeLessonId, onCurrentChange }) => {
  const isVideo = lesson.type === 'video';
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenLesson = () => {
    if (isVideo) {
      onCurrentChange(lesson);
    } else {
      window.open(lesson.link);
    }
  };

  return (
    <ListItem>
      <ListItemText
        onClick={handleOpenLesson}
        primary={`${lesson.order}) ${lesson.title}`}
        sx={{ cursor: 'pointer' }}
      />

      <Button size="small" onClick={handleOpen}>
        Info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-lesson-info"
        aria-describedby="modal-lesson-description"
      >
        <Box sx={style}>
          <LessonCard lesson={lesson} />
        </Box>
      </Modal>
    </ListItem>
  );
};
