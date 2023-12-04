let showToast = async (type, message) => {
    if (type === "error") {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };