interface ICourseVideoPreview {
  link: string;
  duration: number;
  previewImageLink: string;
}

interface IMetaData {
  slug: string;
  skills?: string[];
  courseVideoPreview: ICourseVideoPreview;
}

export interface ICourse {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: IMetaData;
}

export interface ICoursesResponse {
  courses: ICourse[];
}
