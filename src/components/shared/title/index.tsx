

type TitleProps = {
    textInBold?: string
    text?: string
}

export function Title({ textInBold, text }: TitleProps) {
    return (
        <h3 className="text-2xl">
            <span className="font-bold text-green-light">{textInBold}</span> {text}
        </h3>
    )
}
