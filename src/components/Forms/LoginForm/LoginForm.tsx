import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { SignInRequest } from "../../../types/types";
import { useAppDispatch } from "../../../hooks";
import { signInUserRequest } from "../../../store/slices/userSlice/requests";

export const LoginForm = () => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
       
    } = useForm<SignInRequest>();

    const onSubmit = (data: SignInRequest) => {
      console.log(data);
     dispatch(signInUserRequest(data)) 
      
    }
    return (
        <form className='flex flex-col gap-y-3 max-w-[300px] relative' onSubmit={handleSubmit(onSubmit)}>
            <legend className="text-black font-bold text-[30px] text-center">Sign in</legend>
            <p className='text-gray-400'>Don't have an account yet? 
                <Link className='text-violet' to={'/sign-up'}> Sign up here</Link>
            </p>
            <div className="flex justify-between flex-col">
            <label
                className={`flex flex-col gap-y-1 text-gray-600 text-[12px]`}
                htmlFor="idInstance">
                idInstance</label>
                <input
                    className={`border rounded-lg h-[50px] p-2`}
                    id='idInstance'
                    type="text"
                    autoComplete="off"
                    {...register('idInstance', {
                        required: 'Please enter your login',
                        minLength: {
                            value: 3,
                            message: 'idInstance must be at least 3 characters long'
                        },
                        pattern: {
                            value: /^[a-zA-Zа-яА-Я0-9]*$/,
                            message: 'Login should not contain spaces, numbers, parentheses, or hyphens'
                        }
                    })}
                    placeholder="Enter idInstance here" />
            </div>
            <div className="flex justify-between flex-col">
            <label 
            className={`flex flex-col gap-y-1 text-gray-600 text-[12px]`} 
            htmlFor="apiTokenInstance">
                apiTokenInstance</label>
                
                <input 
                className={`border rounded-lg h-[50px] p-2`} 
                autoComplete="off"
                id='apiTokenInstance' 
                type="password" 
                {...register('apiTokenInstance', {
                    required: 'Please enter your apiTokenInstance',
                    minLength: {
                        value: 1,
                        message: 'apiTokenInstance must be at least 8 characters long'
                    },
                    pattern: {
                        value: /^[a-zA-Zа-яА-Я0-9]*$/,
                        message: 'Password should not contain spaces, parentheses, or hyphens'
                    }
                })}
                placeholder="Enter apiTokenInstance here" />
            </div>
            <button className={`bg-violet text-white border rounded-lg h-[50px]`} type="submit">Sign in</button>
        </form>
    )
}