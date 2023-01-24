import Head from 'next/head'
import Image from 'next/image'
import IntroPage from '../components/ui/intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <IntroPage />
    </div>
  )
}
