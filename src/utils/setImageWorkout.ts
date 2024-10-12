import muscu1 from "../assets/images/muscu1.png";
import aphrodite from "../assets/images/Aphrodite.png";
import prometheus from "../assets/images/Prometheus.png";
import runners from "../assets/images/running.png";
import beginners from "../assets/images/beginnersRunners.png";
import intermdiaire from "../assets/images/Inter.png";
import nemesis from "../assets/images/nemesis.png";

const setImageWorkout = (slug: string) => {
  if (slug.includes("musculation")) {
    return muscu1;
  }
  if (slug.includes("course") && slug.includes("debutant")) {
    return beginners;
  }
  if (slug.includes("course") && slug.includes("confirme")) {
    return runners;
  }
  if (slug.includes("course") && slug.includes("intermediaire")) {
    return intermdiaire;
  }
  if (slug.includes("aphrodite")) {
    return aphrodite;
  }
  if (slug.includes("prometheus")) {
    return prometheus;
  }
  if (slug.includes("nemesis")) {
    return nemesis;
  }
};

export default setImageWorkout;
