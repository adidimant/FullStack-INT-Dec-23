import React, { useContext, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { GuitarContext } from "../context/GuitarContext";
import styles from "../styles/Home.module.scss"; 

const Home = memo(() => {
  const { guitars, fetchGuitars } = useContext(GuitarContext);

  useEffect(() => {
    fetchGuitars();
  }, [fetchGuitars]);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <h1>GuitarHub</h1>
        <p>Will help you to find guitar</p>
        <Link to="/guitars" className={styles.heroButton}>
          Go to catalog
        </Link>
      </header>

      {/* Popular Guitars */}
      {/* <section className={styles.popularGuitars}>
        <h2>Popular guitars</h2>
        <div className={styles.guitarList}>
          {guitars.length > 0 ? (
            guitars.slice(0, 6).map((guitar) => (
              <div key={guitar.id} className={styles.guitarCard}>
                <img src={guitar.image} alt={guitar.name} />
                <h3>{guitar.name}</h3>
                <p>{guitar.price} $</p>
                <Link to={`/guitar/${guitar.id}`} className={styles.detailsLink}>
                  more...
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Загрузка гитар...</p>
          )}
        </div>
      </section> */}

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 GuitarHub.</p>
      </footer>
    </div>
  );
});

export default Home;
