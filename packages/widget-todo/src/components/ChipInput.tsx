import React, { KeyboardEvent } from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import { InputAdornment, TextFieldProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textField: {
    marginTop: 5,
  },
}));

type Props = Omit<TextFieldProps, "value" | "onChange"> & {
  value: Array<string>;
  onChange: (tags: Array<string>) => void;
};

export default function TagsInput({
  onChange,
  value,
  onBlur,
  ...inputProps
}: Props) {
  const [inputValue, setInputValue] = React.useState("");
  const classes = useStyles();

  const addTag = () => {
    if (inputValue.length > 0 && !value.includes(inputValue)) {
      // only add new tag if it's not a duplicate
      onChange([...value, inputValue]);
    }
    setInputValue("");
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      addTag();
    }
    if (
      event.key === "Backspace" &&
      value.length > 0 &&
      inputValue.length === 0
    ) {
      // Removing last tag on backspace, and populating the text input with the
      // respective value.
      event.preventDefault();

      const lastItem = value.slice(-1).pop()!;
      setInputValue(lastItem);
      onChange(value.slice(0, -1));
    }
  };

  const handleDelete = (item: string) => () => {
    onChange(value.filter((it) => it !== item));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    addTag();
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <TextField
      value={inputValue}
      InputProps={{
        className:classes.textField,
        startAdornment: value.map((item) => (
          <InputAdornment key={item} position="start">
            <Chip
              key={item}
              tabIndex={-1}
              label={item}
              onDelete={handleDelete(item)}
            />
          </InputAdornment>
        )),
        onChange: (event) => setInputValue(event.target.value),
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
      }}
      {...inputProps}
    />
  );
}
