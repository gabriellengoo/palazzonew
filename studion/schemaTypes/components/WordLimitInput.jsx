import React, { useState } from "react";
import { FormField } from "@sanity/base/components";
import PatchEvent, { set, unset } from "@sanity/form-builder/lib/PatchEvent";

const WordLimitInput = React.forwardRef((props, ref) => {
  const { type, value, onChange, markers, presence } = props;
  const maxWords = type.options?.maxWords || 50; // Set the default maxWords here

  // Calculate word count
  const wordCount = value
    ? value.split(/\s+/).filter(Boolean).length
    : 0;

  // Handle change and enforce word limit
  const handleChange = (event) => {
    const inputValue = event.target.value;
    const words = inputValue.split(/\s+/).filter(Boolean);

    if (words.length <= maxWords) {
      onChange(PatchEvent.from(words.length ? set(inputValue) : unset()));
    }
  };

  return (
    <FormField
      description={type.description}
      title={type.title}
      markers={markers}
      presence={presence}
    >
      <textarea
        ref={ref}
        rows={5}
        value={value || ""}
        onChange={handleChange}
        style={{ width: "100%", resize: "vertical" }}
      />
      <div style={{ textAlign: "right", marginTop: "0.5rem", fontSize: "0.9rem" }}>
        {wordCount}/{maxWords} words
      </div>
    </FormField>
  );
});

export default WordLimitInput;
