import { motion } from 'framer-motion';
import styles from './homeStyle.module.scss';
import variants from '../../components/animations/AnimationVariants';

const Home = () => (
  <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>
    <div className={styles.home}>
      <section className={styles['welcome-section']}>
        <h2>Welcome!!!</h2>
        <p>Start calculating...</p>
        <p>Or... click for a joke!!</p>
      </section>
      <div className={styles['back-img']} />
    </div>
  </motion.div>
);

export { Home as default };
