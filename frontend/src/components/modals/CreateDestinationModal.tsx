import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ModalProps } from "@/helpers/types/ui";
import styles from "./CreateDestinationModal.module.css"
import { AiFillCaretDown} from 'react-icons/ai';
import { useState } from "react";
import CreateDestinationButton from './CreateDestinationButton';



type CreateDestinationModalProps = {
  open: boolean;
  onClose: () => void;
};

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  value?: SelectOption | null;
  onChange: (value: SelectOption | null) => void;
  options: SelectOption[];
};

const CreateDestinationModal: React.FC<CreateDestinationModalProps> = ({
  open,
  onClose,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, SelectOption | null>>({});

  const handleOptionChange = (label: string, option: SelectOption | null) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [label]: option,
    }));
  };

  const handleCreateDestination = () => {
    // Perform the action to create a destination with selectedOptions here
    console.log('Creating Destination with Selected Options:', selectedOptions);

    // Close the modal or perform other actions
    onClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Create Your Desired Destination</DialogTitle>
        <DialogContent>
          <SelectWithOptions
            label="Desired Country"
            value={selectedOptions["Desired Country"]}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
            ]}
            onChange={(value) => handleOptionChange("Desired Country", value)}
          />
          <SelectWithOptions
            label="Desired City"
            value={selectedOptions["Desired City"]}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
            ]}
            onChange={(value) => handleOptionChange("Desired City", value)}
          />

          <SelectWithOptions
            label="Duration"
            value={selectedOptions["Duration"]}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
            ]}
            onChange={(value) => handleOptionChange("Duration", value)}
          /> 
          

          <SelectWithOptions
            label="Start date"
            value={selectedOptions["Start date"]}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
            ]}
            onChange={(value) => handleOptionChange("Start date", value)}
          />



          <SelectWithOptions
            label="End date"
            value={selectedOptions["End date"]}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
            ]}
            onChange={(value) => handleOptionChange("End date", value)}
          />

          <SelectWithOptions
            label="Number of Participant"
            value={selectedOptions["Number of Participant"]}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
            ]}
            onChange={(value) => handleOptionChange("Number of Participant", value)}
          />

          <SelectWithOptions
            label="Would you like to get an hotel with us?"
            value={selectedOptions["Would you like to get an hotel with us?"]}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
            ]}
            onChange={(value) => handleOptionChange("Would you like to get an hotel with us?", value)}
          />

          <SelectWithOptions
            label="Would you like to share a room?"
            value={selectedOptions["Would you like to share a room?"]}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
            ]}
            onChange={(value) => handleOptionChange("Would you like to share a room?", value)}
          /> 
          {/* Add more SelectWithOptions components as needed */}
        </DialogContent>
        <DialogActions>
        <CreateDestinationButton onClick={handleCreateDestination} />
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>

        {/* <DialogActions>
          <Button onClick={handleCreateDestination} color="primary">
            create Destination
          </Button>
        </DialogActions> */}
        
      </Dialog>
    </div>
  );
};

const SelectWithOptions: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className={styles.container}>
      <span className={styles.value} onClick={() => setShowOptions(!showOptions)}>
        {value ? value.label : label}
      </span>
      <button className={styles["clear-btn"]} onClick={() => onChange(null)}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles["caret-btn"]} onClick={() => setShowOptions(!showOptions)}>
        <AiFillCaretDown />
      </div>
      <ul className={`${styles.options} ${showOptions ? styles.show : ""}`}>
        {options.map((option) => (
          <li
            key={option.value}
            className={`${styles.option} ${value && option.value === value.value ? styles.selected : ""}`}
            onClick={() => {
              onChange(option);
              setShowOptions(false);
            } }
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
   
  );
};

export default CreateDestinationModal;


















// type CreateDestinationModalProps = {
//   open: boolean;
//   onClose: () => void;
// };

// type SelectOption = {
//   label: string;
//   value: string;
// };

// type SelectProps = {
//   options: SelectOption[];
//   value?: SelectOption | null;
//   onChange: (value: SelectOption | null) => void;
// };

// const CreateDestinationModal: React.FC<CreateDestinationModalProps> = ({
//   open,
//   onClose,
// }) => {
//   const [value, setValue] = useState<SelectOption | null>(null);
//   const options: SelectOption[] = [
//     { label: "Option 1", value: "option1" },
//     { label: "Option 2", value: "option2" },
//     { label: "Option 3", value: "option3" },
//     { label: "Option 4", value: "option4" },
//     // Add more options as needed
//   ];

//   const handleSelectChange = (newValue: SelectOption | null) => {
//     setValue(newValue);
//     console.log(newValue);
//   };

//   return (
//     <div>
//       <Dialog open={open} onClose={onClose}>
//         <DialogTitle>Create Your Desired Destination</DialogTitle>
//         <DialogContent>
//           <Select options={options} value={value} onChange={handleSelectChange} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={onClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export function Select({ value, onChange, options }: SelectProps) {
//   const [showOptions, setShowOptions] = useState(false); // Define showOptions here

//   return (
//     <><><><><><><><div className={styles.container}>
//       <span className={styles.value} onClick={() => setShowOptions(!showOptions)}>
//         {value ? value.label : "Desired Country"}
//       </span>
//       <button className={styles["clear-btn"]} onClick={() => onChange(null)}>
//         &times;
//       </button>
//       <div className={styles.divider}></div>
//       <div className={styles.caret} onClick={() => setShowOptions(!showOptions)}>
//         <AiFillCaretDown />
//       </div>
//       <ul className={`${styles.options} ${showOptions ? styles.show : ""}`}>
//         {options.map((option) => (
//           <li
//             key={option.value}
//             className={`${styles.option} ${value && option.value === value.value ? styles.selected : ""}`}
//             onClick={() => {
//               onChange(option);
//               setShowOptions(false);
//             } }
//           >
//             {option.label}
//           </li>
//         ))}
//       </ul>
//     </div>

//       {/* //////////////////////// */}

//       <div className={styles.container}>
//         <span className={styles.value} onClick={() => setShowOptions(!showOptions)}>
//           {value ? value.label : "Desired City"}
//         </span>
//         <button className={styles["clear-btn"]} onClick={() => onChange(null)}>
//           &times;
//         </button>
//         <div className={styles.divider}></div>
//         <div className={styles.caret} onClick={() => setShowOptions(!showOptions)}>
//           <AiFillCaretDown />
//         </div>
//         <ul className={`${styles.options} ${showOptions ? styles.show : ""}`}>
//           {options.map((option) => (
//             <li
//               key={option.value}
//               className={`${styles.option} ${value && option.value === value.value ? styles.selected : ""}`}
//               onClick={() => {
//                 onChange(option);
//                 setShowOptions(false);
//               } }
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       </div></>

//       {/* //////////////////////// */}

//       <div className={styles.container}>
//         <span className={styles.value} onClick={() => setShowOptions(!showOptions)}>
//           {value ? value.label : "Duration"}
//         </span>
//         <button className={styles["clear-btn"]} onClick={() => onChange(null)}>
//           &times;
//         </button>
//         <div className={styles.divider}></div>
//         <div className={styles.caret} onClick={() => setShowOptions(!showOptions)}>
//           <AiFillCaretDown />
//         </div>
//         <ul className={`${styles.options} ${showOptions ? styles.show : ""}`}>
//           {options.map((option) => (
//             <li
//               key={option.value}
//               className={`${styles.option} ${value && option.value === value.value ? styles.selected : ""}`}
//               onClick={() => {
//                 onChange(option);
//                 setShowOptions(false);
//               } }
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       </div></>

//       {/* ////////////////////// */}

//       <div className={styles.container}>
//         <span className={styles.value} onClick={() => setShowOptions(!showOptions)}>
//           {value ? value.label : "Start Date"}
//         </span>
//         <button className={styles["clear-btn"]} onClick={() => onChange(null)}>
//           &times;
//         </button>
//         <div className={styles.divider}></div>
//         <div className={styles.caret} onClick={() => setShowOptions(!showOptions)}>
//           <AiFillCaretDown />
//         </div>
//         <ul className={`${styles.options} ${showOptions ? styles.show : ""}`}>
//           {options.map((option) => (
//             <li
//               key={option.value}
//               className={`${styles.option} ${value && option.value === value.value ? styles.selected : ""}`}
//               onClick={() => {
//                 onChange(option);
//                 setShowOptions(false);
//               } }
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       </div></>

//       {/* //////////////////////// */}

//       <div className={styles.container}>
//         <span className={styles.value} onClick={() => setShowOptions(!showOptions)}>
//           {value ? value.label : "End Date"}
//         </span>
//         <button className={styles["clear-btn"]} onClick={() => onChange(null)}>
//           &times;
//         </button>
//         <div className={styles.divider}></div>
//         <div className={styles.caret} onClick={() => setShowOptions(!showOptions)}>
//           <AiFillCaretDown />
//         </div>
//         <ul className={`${styles.options} ${showOptions ? styles.show : ""}`}>
//           {options.map((option) => (
//             <li
//               key={option.value}
//               className={`${styles.option} ${value && option.value === value.value ? styles.selected : ""}`}
//               onClick={() => {
//                 onChange(option);
//                 setShowOptions(false);
//               } }
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       </div></>

//       {/* ///////////////////////// */}

//       <div className={styles.container}>
//         <span className={styles.value} onClick={() => setShowOptions(!showOptions)}>
//           {value ? value.label : "Number of Participants"}
//         </span>
//         <button className={styles["clear-btn"]} onClick={() => onChange(null)}>
//           &times;
//         </button>
//         <div className={styles.divider}></div>
//         <div className={styles.caret} onClick={() => setShowOptions(!showOptions)}>
//           <AiFillCaretDown />
//         </div>
//         <ul className={`${styles.options} ${showOptions ? styles.show : ""}`}>
//           {options.map((option) => (
//             <li
//               key={option.value}
//               className={`${styles.option} ${value && option.value === value.value ? styles.selected : ""}`}
//               onClick={() => {
//                 onChange(option);
//                 setShowOptions(false);
//               } }
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       </div></>

//       {/* ////////////////////// */}

//       <div className={styles.container}>
//         <span className={styles.value} onClick={() => setShowOptions(!showOptions)}>
//           {value ? value.label : "Would you like to get an hotel with us?"}
//         </span>
//         <button className={styles["clear-btn"]} onClick={() => onChange(null)}>
//           &times;
//         </button>
//         <div className={styles.divider}></div>
//         <div className={styles.caret} onClick={() => setShowOptions(!showOptions)}>
//           <AiFillCaretDown />
//         </div>
//         <ul className={`${styles.options} ${showOptions ? styles.show : ""}`}>
//           {options.map((option) => (
//             <li
//               key={option.value}
//               className={`${styles.option} ${value && option.value === value.value ? styles.selected : ""}`}
//               onClick={() => {
//                 onChange(option);
//                 setShowOptions(false);
//               } }
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       </div></>

//       {/* //////////////////////////// */}

//       <div className={styles.container}>
//         <span className={styles.value} onClick={() => setShowOptions(!showOptions)}>
//           {value ? value.label : "Would you like to share a room?"}
//         </span>
//         <button className={styles["clear-btn"]} onClick={() => onChange(null)}>
//           &times;
//         </button>
//         <div className={styles.divider}></div>
//         <div className={styles.caret} onClick={() => setShowOptions(!showOptions)}>
//           <AiFillCaretDown />
//         </div>
//         <ul className={`${styles.options} ${showOptions ? styles.show : ""}`}>
//           {options.map((option) => (
//             <li
//               key={option.value}
//               className={`${styles.option} ${value && option.value === value.value ? styles.selected : ""}`}
//               onClick={() => {
//                 onChange(option);
//                 setShowOptions(false);
//               } }
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       </div></>
//   );
// }

// export default CreateDestinationModal;







