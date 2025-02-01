import clsx from 'clsx';
import s from './chatLayout.module.scss';
import { MessageSquarePlus } from 'lucide-react';
import { ChatBlock } from '../../ui/ChatBlock/ChatBlock';

export const ChatLayout = () => {
    return (
        <div className={clsx(``,s.wrapper)}>
            <div className={clsx(`p-[20px]`,s.sidebar)}>
                <div className={clsx(`flex justify-between items-center`,)}>
                    <p className='font-bold text-white text-[22px]'>Чаты</p>
                    <button 
                    className={s.addChatBtn} 
                    aria-label='add chat'
                    title='add new chat'
                    >
                        <MessageSquarePlus size={25} color='white'/>
                    </button>
                </div>
                <ChatBlock/>
            </div>
            <div className={s.main}>
                <div>Main content</div>
            </div>
           
        </div>
    )
}