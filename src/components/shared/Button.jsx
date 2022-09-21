export default function Button({ children, type, version, isDesabled }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDesabled}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  type: 'button',
  version: 'primary',
  isDesabled: false,
};
