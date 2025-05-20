

type TitleProps = {
    textInBold?: string
    text?: string
    className?: string
}

export function Title({ textInBold, text, className }: TitleProps) {
    return (
        <h3 className="text-2xl">
            <span className={`font-bold text-green-light ${className}`}>{textInBold}</span> {text}
        </h3>
    )
}
