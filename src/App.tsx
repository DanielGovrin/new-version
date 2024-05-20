import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.apple}>
            <div className={styles.top}>
                <span></span>
            </div>
            <div className={styles.middle}>
                <span></span>
            </div>
            <div className={styles.footer} />
        </div>
    );
}

export default App;
