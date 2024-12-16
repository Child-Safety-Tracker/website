import React, { useRef } from "react";
import { useNavigate, useParams  } from "react-router-dom"; // Hook điều hướng đến trang khác
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import { historyData } from "pages/historyDevice/historyData";

// Import dữ liệu từ devices.js và location.js
import { devices } from "../device/deviceData";
import { deviceLocations } from "../device/locationData";

const Location = () => {
  const { deviceId } = useParams();
  const mapRef = useRef(null); // Lưu trữ tham chiếu tới bản đồ
  const navigate = useNavigate(); // Hook điều hướng đến trang khác

  // Kết hợp thông tin từ devices và deviceLocations
  const combinedDevices = devices
    .filter((device) => deviceLocations[device.id]) // Lọc các thiết bị có tọa độ
    .map((device) => ({
      ...device,
      ...deviceLocations[device.id],
    }));

  const handleNavigateToHistory = () => {
    navigate(`/location/historyDevice/`); // Điều hướng đến trang historyDevice
  };

  return (
    <div style={styles.pageContainer}>
      <h3 style={styles.pageTitle}>Device Location Map</h3>

      {/* Device List Section */}
      <div style={styles.deviceList.container}>
        {combinedDevices.map((device, index) => (
          <button 
            key={device.id} 
            className="device-box" 
            style={styles.deviceList.button} 
            onClick={handleNavigateToHistory} // Điều hướng đến trang historyDevice
          >
            <h4 style={styles.deviceList.title}>Thiết bị {String.fromCharCode(65 + index)}: {device.model}</h4>
            <p style={styles.deviceList.info}><strong>IP:</strong> {device.ipAddress ? device.ipAddress : 'Không có IP'}</p>
          </button>
        ))}
      </div>

      {/* Map Section */}
      <MapContainer
        center={[10.8231, 106.6297]} // Tâm bản đồ mặc định
        zoom={13}
        style={styles.mapContainer}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance; // Lưu tham chiếu tới bản đồ
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {combinedDevices.map((device) => (
          <Marker
            key={device.id}
            position={[device.lat, device.lng]}
            icon={new L.Icon.Default()}
          >
            <Popup>
              <strong>{device.model}</strong>
              <br />
              Location: {device.lat}, {device.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

    </div>
  );
};

const styles = {
  pageContainer: { width: "100%", height: "100vh" },
  pageTitle: { textAlign: "center", fontSize: "24px", marginBottom: "10px" },
  mapContainer: { 
    width: "90%", 
    height: "60vh", 
    margin: "20px auto", 
    borderRadius: "16px", 
    overflow: "hidden", 
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)", 
    marginBottom: '50px' 
  },
  deviceList: {
    container: { 
      display: "flex", 
      flexDirection: "column", 
      gap: "10px", 
      marginBottom: "40px", 
      padding: "5px", 
      maxHeight: "50vh", 
      overflowY: "auto" 
    },
    button: { 
      backgroundColor: "#f5f5f5", 
      border: "none", 
      borderRadius: "12px", 
      textAlign: 'left',
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)", 
      cursor: "pointer",
      padding: '10px'
    },
    title: { fontSize: "15px", fontWeight: "bold", color: "#333", marginBottom: "8px" },
    info: { fontSize: "14px", color: "#555" }
  }
};

export default Location;


