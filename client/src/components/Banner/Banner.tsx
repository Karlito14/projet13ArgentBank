import style from './banner.module.scss';

export const Banner = (props: { image: string }) => {
  return (
    <div
      className={style.container}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <section className={style.container__content}>
        <p className={style.container__content__subtitle}>No fees.</p>
        <p className={style.container__content__subtitle}>
          No minimum deposit.
        </p>
        <p className={style.container__content__subtitle}>
          High interest rates.
        </p>
        <p className={style.container__content__subtitle_text}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};
