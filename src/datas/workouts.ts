import { WorkoutSubjectEnum } from "@/models/reducer.model";
import { WorkoutModel } from "@/models/workout.model";

export const workouts: WorkoutModel[] = [
  {
    id: 1,
    title: "Course",
    tags: [WorkoutSubjectEnum.course, WorkoutSubjectEnum.debutant],
    slug: "course",
    content: "<div>Course fractionnée</div>",
  },
];
