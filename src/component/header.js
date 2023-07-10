import React, {useState} from "react";
import { Modal } from "react-bootstrap"; 

function Header(props) {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  

 return (
<div>
    <div className="header-box">
      <button type="button" className="btn">
        Contact us
      </button>
      <button
        type="submit"
        className="btn bg-warning signup-btn"
        onClick={handleShow}
      >
        Sign up
      </button>
    </div>
    <>
    <div
className="modal show"
style={{ display: 'block', position: 'initial' }}
></div>

<Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    show={show} onHide={handleClose}><Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
    </Modal.Header><Modal.Body>

<form>
<div className="mb-3 mt-3">
<label htmlFor="email" className="form-label">
Email:
</label>
<input
type="email"
className="form-control"
id="email"
placeholder="Enter email"
name="email"

/>
</div>
<div className="mb-3">
<label htmlFor="pwd" className="form-label">
Password:
</label>
<input
type="password"
className="form-control"
id="pwd"
placeholder="Enter password"
name="pwd"
/>
</div>
<div className="form-check mb-3">
<label className="form-check-label">
<input className="form-check-input" type="checkbox" name="remember" />

</label>
</div>
<button type="submit" className="btn btn-primary">
Submit
</button>
</form>
</Modal.Body>
</Modal>
</>
</div>
  );
  
}

export default Header;
