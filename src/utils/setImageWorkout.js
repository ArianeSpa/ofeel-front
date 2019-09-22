
import muscu1 from 'src/assets/images/muscu1.png';
import aphrodite from 'src/assets/images/Aphrodite.png';
import prometheus from 'src/assets/images/Prometheus.png';
import runners from 'src/assets/images/running.png';
import beginners from 'src/assets/images/beginnersRunners.png';
import intermdiaire from 'src/assets/images/Inter.png';
import nemesis from 'src/assets/images/nemesis.png';

export default (slug) => {
  if (slug.includes('musculation')) {
    return muscu1;
  }
  if (slug.includes('course' && 'debutant')) {
    return beginners;
  }
  if (slug.includes('course' && 'confirme')) {
    return runners;
  }
  if (slug.includes('course' && 'intermediaire')) {
    return intermdiaire;
  }
  if (slug.includes('aphrodite')) {
    return aphrodite;
  }
  if (slug.includes('prometheus')) {
    return prometheus;
  }
  if (slug.includes('nemesis')) {
    return nemesis;
  }
};
