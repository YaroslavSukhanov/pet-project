import {
    FC, MouseEvent, ReactNode, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface IModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal: FC<IModalProps> = ({
    className, children, isOpen, onClose, lazy,
}) => {
    const [hasOpened, setHasOpened] = useState(false);
    if (isOpen && !hasOpened) setHasOpened(true);

    const mods = {
        [cls.opened]: isOpen,
    };

    useEffect(() => {
        if (!isOpen) return undefined;

        const handleKeyDown = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                onClose?.();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleContentClick = (e: MouseEvent): void => {
        e.stopPropagation();
    };

    if (lazy && !hasOpened) {
        return null;
    }

    return (
        <Portal container={document.body}>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={onClose}>
                    <div className={cls.content} onClick={handleContentClick}>
                        {isOpen && children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
