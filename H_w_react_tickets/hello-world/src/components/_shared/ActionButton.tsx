import './ActionButton.scss';

interface IProps {
    buttonText: string;
    onClick: (event: React.SyntheticEvent) => void;
    className?: string;
}

const ActionButton = (props: IProps) => {
    const {
        buttonText,
        onClick,
        className = ''
    } = props;

    return <button onClick={onClick} className={'common ' + className}>{buttonText}</button>
}

export default ActionButton;