import styles from './homeStyle.module.scss';

const Home = () => (
  <div className={styles.home}>
    <section className={styles['welcome-section']}>
      <h2>Welcome!!!</h2>
      <p>Start calculating...</p>
      <p>Or... click for a joke!!</p>
    </section>
    <div className={styles['back-img']} />
  </div>
);

export { Home as default };
