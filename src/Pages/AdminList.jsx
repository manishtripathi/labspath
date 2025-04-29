import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTable from "../Component/CustomTable"; // adjust path if needed
// import { getallAdmins } from "../redux/slices/getDropdownoptionSlice";
import Modal from "../Component/Modal/ModalPopUp";
import { Button } from "react-bootstrap";
import { getAllAdmins } from "../redux/slices/getDropdownoptionSlice";

export default function AdminList() {
  const dispatch = useDispatch();
  const { allAdmins } = useSelector((state) => state.dropDownOptions);
  
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    if (allAdmins?.length > 0) {
      console.log("Using cached data:", allAdmins);
    } else {
      dispatch(getAllAdmins());
    }
  }, [allAdmins, dispatch]);

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
    { key : "createdAt", label: "Created At", filterable: true },
    { key: "center", label: "Center", filterable: true, renderCell: (row) => row.center.name },
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
        data={allAdmins || []}
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
