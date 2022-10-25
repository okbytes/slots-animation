import {nanoid} from "nanoid"

export const Harmonic = () => {
    const id = nanoid()
    return (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.78043 0L10.1108 2.50009V7.50028L5.78043 10.0004L1.45001 7.50028V2.50009L5.78043 0ZM1.45001 12.5005V17.5007L5.78043 20L10.1108 17.5007V12.5005L5.78043 10.0004L1.45001 12.5005ZM10.1171 7.50028V12.5005L14.4475 15.0006L18.7788 12.5005V7.50028L14.4475 5.00175L10.1171 7.50028Z"
                fill="#FE5D45"
            />
        </svg>
    )
}
