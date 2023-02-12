import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const commonStyles = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Zoom,
  style: {
    minHeight: "15px",
    fontSize: "15px",
    marginTop: "40px",
  },
};

export const successMessage = (message) => {
  toast.success(message, commonStyles);
};

export const errorMessage = (message) => {
  toast.error(message, commonStyles);
};

export const warningMessage = (message) => {
  toast.warn(message, commonStyles);
};

export const infoMessage = (message) => {
  toast.info(message, commonStyles);
};
