import React, { useState } from 'react';

export default function Logout() {
  function handleLogout() {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <button onClick={handleLogout}>Log Out</button>
  );
}
