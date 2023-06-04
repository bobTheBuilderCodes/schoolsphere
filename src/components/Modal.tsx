import { useState, ReactNode } from "react";
import { Modal } from "antd";

interface IProps {
  children?: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const AppModal = ({ title, isOpen, onClose, children }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div onClick={showModal}>
      <Modal
        title={title}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </div>
  );
};

export default AppModal;
