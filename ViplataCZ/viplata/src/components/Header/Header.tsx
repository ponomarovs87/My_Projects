import React from 'react'
import styles from "./Header.module.css";

export const Header: React.FC<{}> = () => {
    return (
        <div className={styles.headerBox}>
            <b>Vyplata CZ</b>
        </div>
    )
}