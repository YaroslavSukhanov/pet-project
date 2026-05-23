import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, FC, InputHTMLAttributes, memo, useState,
} from 'react';
import cls from './Input.module.scss';

type IHTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends IHTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type: IHTMLInputProps['type'];
    placeholder?: string;
}

export const Input: FC<IInputProps> = memo(({
    className, value, onChange, type = 'text', placeholder, ...otherProps
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue, selectionStart } = e.target;
        onChange?.(inputValue);
        setCaretPosition(selectionStart ?? inputValue.length);
    };

    const handleSelect = (event: any) => {
        setCaretPosition(event?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
            <div className={cls.caretWrapper}>
                <input
                    {...otherProps}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    className={cls.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onSelect={handleSelect}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition}ch` }}
                    />
                )}
            </div>
        </div>
    );
});
