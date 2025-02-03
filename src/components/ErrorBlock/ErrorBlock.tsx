import clsx from "clsx"
import { CircleX, Frown } from "lucide-react"
import s from './errorBlock.module.scss';
import { useAppDispatch } from "../../hooks";
import { clearError } from "../../store/slices/userSlice/userSlice";

type IErrorProps = {
    text: string,
}

export const ErrorBlock:React.FC<Partial<IErrorProps>> = (props) => {
    const dispatch = useAppDispatch();
    const handleClearError = () => {
        dispatch(clearError());
    }
    return (
        <div className="flex flex-col gap-y-4 relative h-[100%] justify-center items-center w-full">
            <button 
            type="button" 
            onClick={handleClearError}
            className={clsx(`max-w-max block`,s.btn)}
            >
                <CircleX/>
            </button>
            <p className="text-[22px] text-red font-bold">{props.text}</p>
            <Frown/>
        </div>
    )
}