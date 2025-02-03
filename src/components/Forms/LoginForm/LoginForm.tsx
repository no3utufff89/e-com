import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import { SignInRequest } from "../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { signInUserRequest } from "../../../store/slices/userSlice/requests";
import { ErrorBlock } from "../../ErrorBlock/ErrorBlock";
import { useEffect } from "react";
import { setUser } from "../../../store/slices/userSlice/userSlice";

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const hasError = useAppSelector(state => state.user.hasError);
    const statusText = useAppSelector(state => state.user.statusText);

    const {
        register,
        handleSubmit,
    } = useForm<SignInRequest>();

    const onSubmit = (data: SignInRequest) => {
        dispatch(signInUserRequest(data))
        dispatch(setUser(data));
    }
    useEffect(() => {
        if(statusText === 'OK') {
            navigate('/');
        }
    },[statusText])
    return (
        <>
            {!hasError ? (
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
                            defaultValue='1103183600'
                            autoComplete="off"
                            {...register('idInstance', {
                                required: 'Please enter your login',
                                minLength: {
                                    value: 3,
                                    message: 'idInstance must be at least 3 characters long'
                                },
                                pattern: {
                                    value: /^[a-zA-Zа-яА-Я0-9]*$/,
                                    message: 'idInstance should not contain spaces, numbers, parentheses, or hyphens'
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
                            defaultValue='8ec4f035b3b9448c8a07ccd88156438c9c5f66cc73804a1291'
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
            ) : (
                <ErrorBlock text={statusText as string} />
            )}
        </>
    )
}