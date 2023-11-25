import { IHtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({tag, children}: IHtagProps): JSX.Element => {
    switch (tag) {
        case 'h1': return <h1 className = { styles.h1 }>{ children }</h1>;
        case 'h2': return <h2 className = { styles.h2 }>{ children }</h2>;
        case 'header_title': return <h3 className = { styles.header_title }>{ children }</h3>;
        default: return <></>;
    }};