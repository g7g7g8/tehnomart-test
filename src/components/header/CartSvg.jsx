import { createUseStyles } from "react-jss";

const CartSvg = () => {

    const styles = createUseStyles({
        headerTopIcons: {
            alignSelf: "center",
            paddingLeft: "9px",
            paddingRight: "9px"
        }
    });

    const classes = styles()

    return (
        <svg className={classes.headerTopIcons} width="15" height="15" viewBox="0 0 15 15" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g>
                <path
                    d="M4.5 15C5.32843 15 6 14.3284 6 13.5C6 12.6716 5.32843 12 4.5 12C3.67157 12 3 12.6716 3 13.5C3 14.3284 3.67157 15 4.5 15Z"
                    fill="white" />
                <path
                    d="M12.5 15C13.3284 15 14 14.3284 14 13.5C14 12.6716 13.3284 12 12.5 12C11.6716 12 11 12.6716 11 13.5C11 14.3284 11.6716 15 12.5 15Z"
                    fill="white" />
                <path d="M15 2H4.07L3.648 0H0V2H2.031L4.016 11H15V9H9.441L15 6.951V2Z"
                    fill="white" />
            </g>
        </svg>
    )
}

export default CartSvg