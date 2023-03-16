interface ICourseBody {
  title: string;
  duration: number;
  date: string;
  description: string;
  isTopRated: boolean;
}
interface ICourse extends ICourseBody {
  id: number;
}
