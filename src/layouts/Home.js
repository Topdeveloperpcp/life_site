import React from 'react';
import styles from './styles/home.module.css';
import Header from '../components/header';
import HomeBanner from '../components/home/HomeBanner';
import Content from '../components/home/Content';

const Home = () => {
    return(
        <div className={styles.container}>
            <Header />
            <HomeBanner />
            <Content />
        </div>
    );
}

export default Home;