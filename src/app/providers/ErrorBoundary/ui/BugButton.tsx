import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const BugButton: FC = () => {
    const { t } = useTranslation();
    const [error, setError] = useState<boolean>(false);

    const throwError = () => setError(!error);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={throwError}>
            {t('throw error')}
        </Button>
    );
};
