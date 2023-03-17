import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICourse } from '../../types/course';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import NumbersIcon from '@mui/icons-material/Numbers';
import EventIcon from '@mui/icons-material/Event';
import { getLocalDate } from '../../utils/date-helpers';
import { PATHS } from '../../constants';

interface Props {
  course: ICourse;
}

export const CourseCard: FC<Props> = ({ course }) => {
  const {
    title,
    id,
    description,
    duration,
    lessonsCount,
    previewImageLink,
    rating,
    launchDate,
    meta,
  } = course;
  const { skills, courseVideoPreview } = meta;
  const navigate = useNavigate();

  const handleOpenCourse = () => {
    navigate(`${PATHS.courses}/${id}`);
  };

  return (
    <Grid item>
      <Card
        sx={{ display: 'flex', p: 2, flexDirection: { xs: 'column', lg: 'row' }, maxWidth: '100%' }}
      >
        <CardMedia
          component="img"
          image={previewImageLink + '/cover.webp'}
          alt={title}
          sx={{ width: { xs: '100%', lg: '50%' } }}
        />

        <Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>

            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />

            <Typography gutterBottom variant="subtitle1" component="p">
              {description}
            </Typography>

            <List sx={{ display: 'flex' }}>
              <ListItem disablePadding>
                <ListItemIcon>
                  <HourglassTopIcon />
                </ListItemIcon>

                <ListItemText primary={`Duration: ${duration}`} />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>
                  <NumbersIcon />
                </ListItemIcon>

                <ListItemText primary={`Lessons: ${lessonsCount}`} />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>

                <ListItemText primary={`Date: ${getLocalDate(launchDate)}`} />
              </ListItem>
            </List>

            {skills && skills.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills.map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      padding: '10px',
                      backgroundColor: 'purple',
                      color: '#fff',
                      borderRadius: '10px',
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            )}
          </CardContent>

          <CardActions sx={{ marginTop: 'auto' }}>
            <Button onClick={handleOpenCourse} size="large">
              Details
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};
