import React, { useState } from 'react';
import './setting.css';

export default function Setting() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleEditUsername = () => {
    alert('Chỉnh sửa Tên người dùng');
  };

  const handleEditEmail = () => {
    alert('Chỉnh sửa Email người dùng');
  };

  return (
    <div className="settings-container">
      {/* Thông tin người dùng */}
      <div className="user-info">
        <img 
          src="https://via.placeholder.com/100" 
          alt="User Avatar" 
          className="user-avatar" 
        />
        <h2 className="user-name">Tuan Kiet</h2>
        <p className="user-email">user@gmail.com</p>
      </div>

      {/* Tùy chọn cài đặt */}
      <div className="settings-options">
        
        <div className="setting-option">
          <span className="icon">🌐</span>
          <div className="setting-content">
            <h3>Language</h3>
            <p>English</p>
          </div>
        </div>

        <div className="setting-option">
          <span className="icon">🔔</span>
          <div className="setting-content">
            <h3>Notification</h3>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={notificationsEnabled} 
                onChange={handleToggleNotifications} 
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-option" onClick={handleEditUsername}>
          <span className="icon">👤</span>
          <div className="setting-content">
            <h3>Username</h3>
            <p>Tuan Kiet</p>
          </div>
        </div>

        <div className="setting-option" onClick={handleEditEmail}>
          <span className="icon">✉️</span>
          <div className="setting-content">
            <h3>Email</h3>
            <p>user@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
  
}

