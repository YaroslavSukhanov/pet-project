import React, { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface IModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
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
    className, children, isOpen, onClose,
}) => {
    const mods = {
        [cls.opened]: isOpen,
    };

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

    return (
        <Portal container={document.body}>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={onClose}>
                    <div className={cls.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
