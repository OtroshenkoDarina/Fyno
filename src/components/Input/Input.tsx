import React, {ChangeEventHandler} from 'react';
import styles from './styles.module.scss'
import cn from "classnames";

interface InputProps {
    image?: string;
    value: string;
    setValue: ChangeEventHandler<HTMLInputElement>;
    notEditable?: boolean,
    maxWidth?: string
}

const Input: React.FC<InputProps> = ({
                                         image,
                                         value,
                                         setValue,
                                         notEditable,
                                         maxWidth = '100%'
                                     }) => {
    return (
        <div
            className={cn(styles.input, notEditable && styles.input_notEditable)}
            style={{maxWidth}}
        >
            {!!image && <img src={image} alt={''}/>}
            <input value={value} onChange={setValue}/>
        </div>
    );
};

export default Input;
