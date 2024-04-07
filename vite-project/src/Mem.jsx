import PropTypes from 'prop-types'; // Import PropTypes


function Button(props) {
    const {name, img} = props;
    const memStyle = {
        height:'500px',
        width:'500px',
        fontSize:'30px',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        color:'#000000',
        fontWeight:'bold',
        margin:'100px'
    }
    return (
        <div style={memStyle}>
            <img src={img} style={{height:'500px', width:'500px'}}></img>
            <p>{name}</p>
        </div>
    )
}
Button.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  };

export default Button