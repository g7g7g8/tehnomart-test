import { createUseStyles } from "react-jss";

const SearchSvg = () => {

    const styles = createUseStyles({
        headerTopIcons: {
            alignSelf: "center",
            paddingLeft: "9px",
            paddingRight: "9px"
        }
    });

    const classes = styles()

    return (
        <svg className={classes.headerTopIcons} width="17" height="17" viewBox="0 0 17 17"
            xmlns="http://www.w3.org/2000/svg">
            <g>
                <path fillRule="nonzero" clipRule="nonzero"
                    d="M13.458 12.044L17 15.586L15.586 17L12.044 13.458C10.782 14.421 9.21 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15.0001 9.14309 14.4581 10.7403 13.458 12.044ZM7.5 2C4.467 2 2 4.467 2 7.5C2.00331 10.5362 4.4638 12.9967 7.5 13C10.532 13 13 10.532 13 7.5C13 4.467 10.532 2 7.5 2Z" />
            </g>
        </svg>
    )
}

export default SearchSvg