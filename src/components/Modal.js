import ReactDOM from 'react-dom';

const Modal = ({ title, textContent, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={e => e.stopPropagation()}
      >
        <div className="header">{title}</div>
        <div className="content">{textContent}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector('#modals')
  );
};

export default Modal;
