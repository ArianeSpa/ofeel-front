import { WorkoutSubjectEnum } from "./reducer.model";

export type WorkoutModel = {
  id: number;
  title: string;
  tags?: WorkoutSubjectEnum[];
  slug: string;
  content: string;
};
