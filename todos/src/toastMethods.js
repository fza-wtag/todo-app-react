import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const commonStyles = {
  position: "top-center",
  autoClose: 400,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
  style: {
    minHeight: "15px",
    fontSize: "13px",
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
