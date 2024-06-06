import React, {Dispatch, RefObject, SetStateAction} from 'react';
import styles from './styles.module.scss'
import cn from "classnames";

interface DropdownProps {
    options: string[];
    setActiveOption: Dispatch<SetStateAction<string>>;
    activeOption: string;
    isOpen: boolean;
    onClose: () => void;
    dropdownRef: RefObject<HTMLUListElement>;
}

const Dropdown: React.FC<DropdownProps> = ({
                                               options,
                                               setActiveOption,
                                               activeOption,
                                               isOpen,
                                               onClose,
                                               dropdownRef
                                           }) => {

    const onSelect = (option: string) => {
        setActiveOption(option)
        onClose()
    }

    return (
        <ul ref={dropdownRef} className={cn(styles.dropdown, isOpen && styles.dropdown_isOpen)}>
            {options?.map((item, key) =>
                <li onClick={() => onSelect(item)}
                    key={key}
                    className={cn(item === activeOption && styles.active)}
                >
                    {item}
                </li>)}
        </ul>
    );
};

export default Dropdown;
