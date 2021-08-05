import * as React from "react"

//disable Y-overflow when active when active

const Modal = ({ children, isActive, handleClose, overflowY }) => {
  const handleCloseClick = () => {
    handleClose()
  }

  return (
    <div
      className={
        isActive ? "modal is-active animate__animated animate__fadeIn" : "modal"
      }
    >
      <div className="modal-background" onClick={handleCloseClick}></div>
      <div className="modal-content">{children}</div>
      {/* <div className="modal-content is-huge" style={{ maxHeight: "100vh" }}>
        {children}
      </div> */}
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleCloseClick}
      ></button>
    </div>
  )
}

export default Modal
