import { FC } from 'react';
import { ILesson } from '../../types/course';
import Grid from '@mui/material/Grid';
import { CardItem } from '../atoms/CardItem';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ListItemText from '@mui/material/ListItemText';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArticleIcon from '@mui/icons-material/Article';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const imagePlaceholder =
  'https://wisey.app/assets/images/web/lessons-covers/the-power-of-self-discipline-how-to-stay-on-track/lesson-1/lesson-1.webp';

type Props = {
  lesson: ILesson;
};

export const LessonCard: FC<Props> = ({ lesson }) => {
  const { previewImageLink, title, order, link, id, type, duration, status } = lesson;

  return (
    <Grid item xs={12}>
      <CardItem>
        <CardMedia
          component="img"
          image={type === 'video' ? `${previewImageLink}/lesson-${order}.webp` : imagePlaceholder}
          alt={title}
          sx={{ width: { xs: '100%', lg: '50%' } }}
        />

        <Box sx={{ width: { xs: '100%', lg: '50%' } }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {title}
            </Typography>

            <List sx={{ display: 'flex' }}>
              <ListItem disablePadding>
                <ListItemIcon>
                  <HourglassTopIcon />
                </ListItemIcon>

                <ListItemText primary={`Duration: ${duration}`} />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>{status === 'locked' ? <LockIcon /> : <LockOpenIcon />}</ListItemIcon>

                <ListItemText primary="Status" />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>
                  {type === 'video' ? <OndemandVideoIcon /> : <ArticleIcon />}
                </ListItemIcon>

                <ListItemText primary={`Type: ${type}`} />
              </ListItem>
            </List>
          </CardContent>

          <CardActions>
            <Button size="large">View</Button>
          </CardActions>
        </Box>
      </CardItem>
    </Grid>
  );
};
