import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

// Backdrop fade animation
const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

// Popup modal animation with spring effect
const modal = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

// Global references for open and close
let showModal = null;
let closeModal = null;

const ModalManager = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    showModal = (modalContent) => {
      setContent(modalContent);
      setIsOpen(true);
    };

    closeModal = () => {
      setIsOpen(false);
      setTimeout(() => setContent(null), 200);
    };
  }, []);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeModal}
        >
          <motion.div
            className="rounded-2xl shadow-2xl w-full max-w-md relative z-50"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {content}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

// Self-contained modal API
const Modal = {
  open: (content) => {
    if (showModal) showModal(content);
    else console.error("Modal not mounted. Make sure <Modal.Provider /> is in your root component.");
  },
  close: () => {
    if (closeModal) closeModal();
    else console.error("Modal not mounted.");
  },
  Provider: ModalManager,
};

export default Modal;
