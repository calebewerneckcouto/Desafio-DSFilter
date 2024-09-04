import { useState } from 'react';
import './styles.css';

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSearch: Function;
}
type FormData = {
    min?: number;
    max?: number;
}

export default function FilterCard({ onSearch }: Props) {

    const [formData, setFormData] = useState<FormData>({
        min: undefined,
        max: undefined
    })
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        setFormData(formData);
        onSearch(formData.min, formData.max);
    }
    function handleImputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <section className='dsf-container dsf-filter-card dsf-mb20'>
            <form className='dsf-form' onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Preço mínimo'
                    name='min'
                    value={formData.min || ""}
                    onChange={handleImputChange}
                />
                <input type="text"
                    placeholder='Preço máximo'
                    name='max'
                    value={formData.max || ""}
                    onChange={handleImputChange}
                />
                <button className='dsf-filter-card-button'>Filtrar</button>
            </form>
        </section>
    );
}