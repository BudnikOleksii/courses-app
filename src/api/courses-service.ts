import $api, { ENDPOINTS } from './index';

export const getCourses = () => {
  return $api.get(ENDPOINTS.coursesPreview);
};
