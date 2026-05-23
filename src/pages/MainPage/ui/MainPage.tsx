import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const handleChange = (inputValue: string) => {
        setValue(inputValue);
    };

    return (
        <div>
            {t('Main')}
            <Counter />
            <Input placeholder="Name" type="text" onChange={handleChange} value={value} />
        </div>
    );
}

export default MainPage;
