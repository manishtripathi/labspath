import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTable from "../Component/CustomTable"; // adjust path if needed
import { getAllCenters, getdoctor } from "../redux/slices/getDropdownoptionSlice";
import Modal from "../Component/Modal/ModalPopUp";
import { Button } from "react-bootstrap";

export default function DoctorList() {
  const dispatch = useDispatch();
  const { allDoctor } = useSelector((state) => state.dropDownOptions);
  
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    if (allDoctor?.length > 0) {
      console.log("Using cached data:", allDoctor);
    } else {
      dispatch(getdoctor());
    }
  }, [allDoctor, dispatch]);

  const handleOpenModal = (title, data) => {
     
    setModalTitle(title);
    setModalData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalTitle("");
    setModalData([]);
  };

  const renderViewButton = (title, data) => (
    <Button
      variant="primary"
      size="sm"
      onClick={() => handleOpenModal(title, data)}
    >
      View List
    </Button>
  );

  const columns = [
    { key: "name", label: " Name", filterable: true },
    { key: "email", label: "Email", filterable: true },
    { key : "specialization", label: "Specialization", filterable: true },
  ];

  const actions = [
    {
      label: "View",
      onClick: (row) => console.log("Viewing center:", row),
    },
    {
      label: "Edit",
      onClick: (row) => console.log("Editing center:", row),
    },
  ];

  return (
    <div className="p-4">
      <CustomTable
        data={allDoctor || []}
        columns={columns}
        actions={actions}
      />

      {/* Modal */}
      <Modal isOpen={showModal} onClose={handleCloseModal} centered size="md">
        
        <div>
          {modalData.length > 0 ? (
            <div className="flex flex-col gap-2">
              {modalData.map((item, index) => (
                <div
                  key={index}
                  className="p-2 border rounded shadow-sm flex flex-col bg-light"
                >
                  <span className="font-semibold">{item.name || "Unnamed"}</span>
                  {item.email && (
                    <span className="text-muted text-sm">{item.email}</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">No data available.</div>
          )}
        </div>
      </Modal>
    </div>
  );
}
