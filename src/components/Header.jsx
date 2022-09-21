import PropTypes from 'prop-types';
export default function Header({ headerText, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className='container'>
        <h2>{headerText}</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  headerText: 'Default Feedback UI ',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};
Header.propTypes = {
  headerText: PropTypes.string,
  bgColor: PropTypes.string,
};
