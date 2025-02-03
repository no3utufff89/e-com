import { NewPhone } from '../../../types/types';
import s from './AddNewChat.module.scss';
import { UserRoundPlus } from 'lucide-react';
import { useForm } from 'react-hook-form';
type INewChatProps = {
    handleClick: () => void,
}
export const AddNewChat = (props:INewChatProps) => {
    // const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: {errors},
        
    } = useForm<NewPhone>();
    const onSubmit = (data: NewPhone) => {
        // dispatch(addPhoneRequest(data));
        props.handleClick()
        console.log(data);
    };
    
    return (
        <div className={s.wrapper}>

                <form className={s.newChatForm} onSubmit={handleSubmit(onSubmit)}>
                    {errors.phone ? <p className={s.error}>{errors.phone.message}</p> : null}
                <input 
                   id='phone'
                    {...register('phone', {
                        required: 'Please enter phone number',
                        pattern: {
                            value: /^\+7\d{10}$/,
                            message: 'Phone number must be in the format +7XXXXXXXXXX'
                        }
                    })}

                    className={s.input} 
                    />
                <button type='submit' className={s.button}>
                    <UserRoundPlus size={25}/>
                </button>
            </form>


        </div>
    )
}