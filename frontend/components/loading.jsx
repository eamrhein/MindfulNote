/* eslint-disable react/prop-types */
import React from 'react';

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <div className="lds-background">
        <div className="lds-container">
          <div class="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Loading;
