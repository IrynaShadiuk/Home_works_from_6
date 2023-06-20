interface IProps {
    placeholder: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    type?: string;
}

const InputField = (props: IProps) => {
    const {
        placeholder,
        onChange,
        type = 'text'
    } = props;

    return <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
    />
}

export default InputField;