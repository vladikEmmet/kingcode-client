import { FC } from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
    progress: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({progress}) => {
    
    if(!progress || progress <= 0 || progress > 100) return null;
    return (
        <div className={styles.container}>
            <div className={styles.filler} style={{width: `${progress}%`}}>
                <span className={styles.label}>{`${progress}%`}</span>
            </div>
        </div>
    )
}