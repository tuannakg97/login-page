import './styles.scss';

interface BubbleProps {
    style: object
}

const Bubble = ({style}: BubbleProps) => {
    return (
        <div className="bubble" style={style}></div>
    )
}

export default Bubble;