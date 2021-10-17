import styles from "../styles/Menu.module.css";
import { Joysctic } from "../components/joysctic";
import { Head } from "../components/head";
import { TShirt } from "../components/t-shirt";

const Menu = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={"/logo.png"} />
      </header>
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <div className={styles.menuHeader}>
            <h1>SKAPA.WORLD</h1>
          </div>

          <div className={styles.headStyle}>
            <Head />
            <div className={styles.headStyleDashed} />
          </div>
          <div className={styles.menuContent}>
            <div className={styles.menuItem}>
              <TShirt />
              <p>SHOP</p>
            </div>
            <div className={styles.menuItem}>
              <Joysctic />
              <p>GAME</p>
            </div>
            <div className={styles.menuItem}>
              <Joysctic />
              <p>ABOUT</p>
            </div>
            <div className={styles.menuItem}>
              <Joysctic />
              <p>CONTACT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
