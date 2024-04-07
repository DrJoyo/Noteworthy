import PropTypes from 'prop-types'; // Import PropTypes


function Button(props) {
    const {text, top, right} = props;
    const buttonStyle = {
        backgroundColor:'#17405E',
        border: '3px solid black',
        position:'absolute',
        top:top,
        right:right,
        height:'80px',
        width:'210px',
        fontSize:'30px'
    }
    return (
        <div>
            <button style={buttonStyle}>{text}</button>
        </div>
    )
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  };

export default Button