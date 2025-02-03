import clsx from 'clsx';
import s from './chatLayout.module.scss';
import { MessageSquarePlus } from 'lucide-react';
import { ChatBlock } from '../../ui/ChatBlock/ChatBlock';
import { useState } from 'react';
import { AddNewChat } from '../../Forms/AddNewChat/AddNewChat';

export const ChatLayout = () => {
    const [show, setShow] = useState<boolean>(false);
    const handleShowNewChatForm = () => setShow(!show);
    return (
        <div className={clsx(``,s.wrapper)}>
            <div className={clsx(`p-[20px]`,s.sidebar)}>
                <div className={clsx(`flex justify-between items-start flex-wrap gap-y-3 h-[85px] mb-[100px]`,)}>
                    <p className='font-bold text-white text-[22px]'>Чаты</p>
                    <button 
                    className={s.addChatBtn} 
                    aria-label='add chat'
                    title='add new chat'
                    onClick={handleShowNewChatForm}
                    >
                        <MessageSquarePlus size={25} color='white'/>
                    </button>
                    {show && <AddNewChat handleClick={handleShowNewChatForm}/>}
                </div>
                <ChatBlock/>
            </div>
            <div className={s.main}>
                <div>Main content</div>
            </div>
           
        </div>
    )
}