import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ModalProps } from "@/helpers/types/ui";

const CreateDestinationModal: React.FC<ModalProps> = ({ open, onClose }) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Creeat Your Desired Desitnation</DialogTitle>
        <DialogContent>
          <DialogContentText className="cocoa_yellow cursor-pointer">
            If your desired destination isn’t on the list, click here to suggest
            it to us
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateDestinationModal;
