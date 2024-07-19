import { Feature } from '../../types/types';
import style from './feature.module.scss';

export const FeatureItem = ({feature}: { feature: Feature }) => {
  return (
    <div className={style.container}>
      <img
        src={feature.image}
        alt="icon"
        className={style.container__image}
      />
      <h3 className={style.container__title}>{feature.title}</h3>
      <p className={style.container__text}>{feature.text}</p>
    </div>
  );
};
