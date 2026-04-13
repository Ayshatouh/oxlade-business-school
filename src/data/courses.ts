import fraudDetection from './courses/fraud-detection.json';

export interface CourseTopic {
  title: string;
  bullets: string[];
}

export interface CourseSchedule {
  date: string;
  venue: string;
  duration: string;
  price: string;
}

export interface CourseData {
  id: string;
  title: string;
  category: string;
  description: string;
  whoShouldAttend: string;
  pastDelegates: string[];
  outcomes: string[];
  topics: CourseTopic[];
  schedule: CourseSchedule[];
}

const courses: Record<string, CourseData> = {
  'fraud-detection': fraudDetection as CourseData,
};

export function getCourseById(id: string): CourseData | null {
  return courses[id] || null;
}

export function getAllCourseIds(): string[] {
  return Object.keys(courses);
}
