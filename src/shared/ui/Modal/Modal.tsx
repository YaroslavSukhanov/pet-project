import React, {
    FC, ReactNode, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface IModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

// export const Modal: FC<IModalProps> = ({
//     className, children, isOpen, onClose,
// }) => {
//     const [isClosing, setIsClosing] = React.useState(false);
//
//     const mods = {
//         [cls.opened]: isOpen,
//         [cls.isClosing]: isClosing,
//     };
//
//     const timeRef = React.useRef(null);
//
//     const handleClose = (): void => {
//         if (onClose) {
//             setIsClosing(true);
//             timeRef.current = setTimeout(() => {
//                 onClose();
//                 setIsClosing(false);
//             }, ANIMATION_DELAY);
//         }
//     };
//
//     const handleContentClick = (event: React.MouseEvent): void => {
//         event.stopPropagation();
//     };
//
//     return (
//         <div className={classNames(cls.modal, mods, [className])}>
//             <div className={cls.overlay} onClick={handleClose}>
//                 <div className={cls.content} onClick={handleContentClick}>
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// };

export const Modal: FC<IModalProps> = ({
    className, children, isOpen, onClose, lazy,
}) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const mods = {
        [cls.opened]: isOpen,
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    React.useEffect(() => {
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

    const handleContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
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
