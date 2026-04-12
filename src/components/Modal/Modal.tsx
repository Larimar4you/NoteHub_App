import { useEffect, type ReactNode, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleBackdropClick = (e: KeyboardEvent<HTMLDivElement>): void => {
      if (e.key === e.target) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeClick);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscapeClick);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>{children}</div>
    </div>,
    document.body,
  );
}
