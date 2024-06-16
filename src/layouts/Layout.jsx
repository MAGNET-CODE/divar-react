import Footer from "layouts/Footer"
import Header from "layouts//Header"

import styles from "layouts/Layout.module.css"

function Layout({children}) {
  return (
    <>
        <Header />
        <div className={styles.main}>{children}</div>
        <Footer />
    </>
  )
}

export default Layout