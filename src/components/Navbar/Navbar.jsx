import styles from './Navbar.module.css'
export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <a href="#" id="logo">XYZ.com</a>
                </div>
                <ul className={styles.navList}>
                    <li className={styles.navOption}><a href="#home">Home</a></li>
                    <li className={styles.navOption}><a href="#aboutUs">About Us</a></li>
                    <li className={styles.navOption}><a href="#companies">Companies</a></li>
                    <li className={styles.navOption}><a href="ngos">NGOs</a></li>
                    <li className={styles.navOption}><a href="contactUs">Contact Us</a></li>
                </ul>
                <div className={styles.signIn}>
                    <a href="#">Sign in</a>
                </div>
            </div>
        </>
    )
}