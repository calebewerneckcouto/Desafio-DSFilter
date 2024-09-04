import { useContext } from 'react';
import './styles.css'
import { ContextListCount } from '../../utils/context-listing';

export default function Header() {
    const { contextListCount } = useContext(ContextListCount);
    return (
        <header>
            <div className='dsf-container dsf-header-content'>
                <h1>DSFilter</h1>
                <p>{contextListCount} produto(s)</p>
            </div>
        </header>
    );
}