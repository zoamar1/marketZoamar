import style from './Menu.module.css'

export default function Menu(){
    return(
        <nav class={style.nav}>
            <div>
                <div className={style.page}>
                    <p className={style.pageIcon}><span class="material-symbols-outlined">person</span></p>
                    <h2 className={style.pageItem}>Login</h2>
                </div>
                <div className={style.page}>
                    <p className={style.pageIcon}><span class="material-symbols-outlined">shopping_cart</span></p>
                    <h2 className={style.pageItem}>Carrinho</h2>
                </div>
            </div>
            <div className={style.clothing}>
                    <h2 className={style.clothingItem}>Camisetas</h2>
                    <h2 className={style.clothingItem}>Moletons</h2>
                    <h2 className={style.clothingItem}>Tênis</h2>
                    <h2 className={style.clothingItem}>Calças</h2>
            </div>
            
        </nav>
    )
}