interface ICourseBody {
  title: string;
  duration: number;
  date: string;
  description: string;
  isTopRated: boolean;
  isDeleted: boolean;
}
interface ICourse extends ICourseBody {
  id: number;
}
