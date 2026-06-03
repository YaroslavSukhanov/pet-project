import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();
    // const [value, setValue] = useState('');
    //
    // const handleChange = (inputValue: string) => {
    //     setValue(inputValue);
    // };

    return (
        <div>
            {t('Main')}
        </div>
    );
}

export default MainPage;
