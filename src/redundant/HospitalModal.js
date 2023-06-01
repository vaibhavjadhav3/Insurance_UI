import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React from 'react';
function HospitalModal({oldhospital}) {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Edit Announcement</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleUpdate}>
                        <div className="form-group" style={{ paddingTop: '20px' }}>
                            <label htmlFor="hospitalName">Hospital Name:</label>
                            <input type="text" name="hospitalName" className="form-control" id="hospitalName" value={oldhospital.hospitalName} onChange={handleInputChange} />
                        </div>
                        <div className="form-group" style={{ paddingTop: '20px' }}>
                            <label htmlFor="hospitalCity">Hospital City:</label>
                            <input type="text" name="hospitalCity" className="form-control" id="hospitalCity" value={ oldhospital.hospitalCity} onChange={handleInputChange} />
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                            <button type="submit" className="btn btn-primary" >Add</button>
                        </div>
                    </form>

                </ModalBody>

            </Modal>
        </div>
    )

}

export default HospitalModal;