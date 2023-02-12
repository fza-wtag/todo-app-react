import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const commonStyles = {
  position: "bottom-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Zoom,
  style: {
    minHeight: "15px",
    fontSize: "13px",
    maxWidth: "300px",
  },
};

export const successMessage = (message) => {
  toast.success(message, commonStyles);
};

export const dangerMessage = (message) => {
  toast.error(message, commonStyles);
};

export const warningMessage = (message) => {
  toast.warn(message, commonStyles);
};

export const infoMessage = (message) => {
  toast.info(message, commonStyles);
};
