import { NgoCard } from '../../components'
import styles from './NGO.module.css'

export default function NGO() {
    return (
        <div className={styles.main}>
            <div className={styles.headingContainer}>
            </div>
            <NgoCard />
        </div>
    )
}