import s from './chatBlock.module.scss'

export const ChatBlock = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.avatar} src="/public/icon.svg" alt="image" width={50} height={50}/>
            <p className={s.number}>+7-903-816-22-22</p>
        </div>
    )
}