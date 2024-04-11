import style from './Header.module.css'

export default function Header(){
    function eita(){

    }
    return(
        <header>
            <h1 className={style.title}>Zoamar</h1>
            <div className={style.headerItems}>
                <div className={style.page}>
                    <h2 className={style.pageItem}>Conta</h2>
                    <p className={style.pageIcon}><span class="material-symbols-outlined">person</span></p>
                </div>
                <div className={style.page}>
                    <h2 className={style.pageItem}>Carrinho</h2>
                    <p className={style.pageIcon}><span class="material-symbols-outlined">shopping_cart</span></p>
                </div>
                <div className={style.navContainer}>
                    <p className={style.search}><span class="material-symbols-outlined">search</span></p>
                    <p className={style.menu} onClick={eita()}><span class="material-symbols-outlined">menu</span></p>
                </div>
            </div>
        </header>
    )
}