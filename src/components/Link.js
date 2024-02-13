// Link.js
import React from 'react';
import styles from '../styles/stylesheet.css'; // Import CSS module

const Link = ({ url, text }) => {
    return (
        <a href={url} className={styles.link}>{text}</a>
    );
}

export default Link;