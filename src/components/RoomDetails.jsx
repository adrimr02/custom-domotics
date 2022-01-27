import './roomDetails.css'

export function RoomDetails({ handleClose, show, children}) {
  const showHideClassName = show ? "modal display-block" : "modal display-none"
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="close-button" type="button" onClick={handleClose} >X</button>
        {children}
      </section>
    </div>
  );
}
