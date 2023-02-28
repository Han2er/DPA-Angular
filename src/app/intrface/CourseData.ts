export default interface CourseData {
  id: number;
  title: string;
  subtitle: string;
  imgUrl: string;
  price: number;
  mentors: Array<Mentors>;
}

interface Mentors {
  name: string;
  profession: string;
}
