import PropTypes from 'prop-types'; // Import PropTypes


function Button(props) {
    const {name, img} = props;
    const memStyle = {
        height:'300px',
        width:'300px',
        fontSize:'30px',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'bold'
    }
    return (
        <div style={memStyle}>
            <img src={img} style={{height:'300px', width:'300px'}}></img>
            <p>{name}</p>
        </div>
    )
}
Button.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  };

export default Button