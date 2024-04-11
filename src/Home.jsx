import style from './Home.module.css'
import Header from './components/Header'
import Menu from './components/Menu'


export default function Home() {
  return (
    <>
      <Header/>
      <main className={style.main}> 
        <h1>PROMOÇÃO: Compre 2 moletons e ganhe 5 camisetas</h1>
      </main>
      <Menu/>
    </>
  )
}
