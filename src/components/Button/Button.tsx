import React from 'react';
import styles from './styles.module.scss'
import cn from "classnames";

type ButtonProps = {
    text: string;
    image?: string;
    isRounded?: boolean;
    onClick?: () => any;
};

const Button: React.FC<ButtonProps> = ({text, image, isRounded, onClick}) => {
    return (
        <button className={cn(styles.button, isRounded && styles.isRounded)} onClick={onClick}>
            {!!image && <div className={styles.image}>
                <img src={image} alt={''}/>
            </div>}
            {text}
        </button>
    );
};

export default Button;
