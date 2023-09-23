import style from './style.module.css'

const Loader = ({ loading }) => {
    return (
        <>
            {loading &&
                <div className={style['contenedor']}>
                    <div className={style['loader-1']} >
                        <div className={style['dot']}></div>
                        <div className={style['dot']}></div>
                        <div className={style['dot']}></div>
                        <div className={style['dot']}></div>
                        <div className={style['dot']}></div>
                        <div className={style['dot']}></div>
                        <div className={style['dot']}></div>
                        <div className={style['dot']}></div>
                        <div className={style['dot']}></div>
                    </div >
                </div>
            }
        </>
    )
}

export default Loader