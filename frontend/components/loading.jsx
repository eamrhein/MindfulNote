/* eslint-disable react/prop-types */
import React from 'react';

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <div className="lds-background">
        <div className="lds-container">
          <div className="lds-ripple">
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Loading;
