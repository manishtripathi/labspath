import { toast } from "react-toastify";

export const notifySuccess = (message) => {
  toast.success(message);
};

export const notifyError = (message) => {
  toast.error(message);
};

export const notifyInfo = (message) => {
  toast.info(message);
};

export const toastPromise = (promise, messages) => {
  return toast.promise(promise, {
    pending: messages?.pending || "Processing...",
    success: messages?.success || "Operation successful!",
    error: messages?.error || "Something went wrong!",
  });
};
