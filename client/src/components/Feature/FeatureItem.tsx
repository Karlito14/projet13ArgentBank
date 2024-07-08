import { Feature } from '../../types/types';
import style from './feature.module.scss';

export const FeatureItem = (props: { feature: Feature }) => {
  return (
    <div className={style.container}>
      <img
        src={props.feature.image}
        alt="icon"
        className={style.container__image}
      />
      <h3 className={style.container__title}>{props.feature.title}</h3>
      <p className={style.container__text}>{props.feature.text}</p>
    </div>
  );
};
