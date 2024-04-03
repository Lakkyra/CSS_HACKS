import styles from './NgoCard.module.css'
export default function NgoCard() {
    return (
        <div className={styles.card}>
            <div className={styles.logoContainer}>
                <img src="/NGO logo.jpg" alt="" />
            </div>
            <div className={styles.TitleContainer}>
                <h1>Robin Hood Army</h1>
                <h5>"Save the Hungry Citizen"</h5>
            </div>
        </div>
    )
}