import React from 'react';

export const NameErrors = ({ nameErrors }) => (
  <div className="formErrors">
    {Object.keys(nameErrors).map((fieldName, i) => {
      if (nameErrors[fieldName].length > 0) {
        return (
          <p key={i}>
            {fieldName} {nameErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);

export const numberErrors = ({ numberErrors }) => (
  <div className="formErrors">
    {Object.keys(numberErrors).map((fieldName, i) => {
      if (numberErrors[fieldName].length > 0) {
        return (
          <p key={i}>
            {fieldName} {numberErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);

export const EmailErrors = ({ emailErrors }) => (
  <div className="formErrors">
    {Object.keys(emailErrors).map((fieldName, i) => {
      if (emailErrors[fieldName].length > 0) {
        return (
          <p key={i}>
            {fieldName} {emailErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);

export const CvErrors = ({ cvErrors }) => (
  <div className="formErrors">
    {Object.keys(cvErrors).map((fieldName, i) => {
      if (cvErrors[fieldName].length > 0) {
        return (
          <p key={i}>
            {fieldName} {cvErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);

export const AnsOneErrors = ({ ansoneErrors }) => (
  <div className="formErrors">
    {Object.keys(ansoneErrors).map((fieldName, i) => {
      if (ansoneErrors[fieldName].length > 0) {
        return <p key={i}>{ansoneErrors[fieldName]}</p>;
      } else {
        return '';
      }
    })}
  </div>
);
export const AnsTwoErrors = ({ anstwoErrors }) => (
  <div className="formErrors">
    {Object.keys(anstwoErrors).map((fieldName, i) => {
      if (anstwoErrors[fieldName].length > 0) {
        return <p key={i}>{anstwoErrors[fieldName]}</p>;
      } else {
        return '';
      }
    })}
  </div>
);
