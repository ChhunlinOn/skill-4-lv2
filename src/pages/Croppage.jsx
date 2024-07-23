import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";
import API_BASE_URL from "../config";

// function TableRow({ crops, index }) {
//   return (
//     <tr key={crops.id}>
//       <td>{index + 1}</td>
//       <td>{crops.name}</td>
//       <td>{crops.crop_type.name}</td>
//       <td>
//         <button>Edit</button>
//       </td>
//     </tr>
//   );
// }

function CropPages() {
  const [crops, setcrop] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/crops`);
        const data = await res.json();
        setcrop(data);
        console.log(crops);
        return res.data;
      } catch (error) {
        console.error("error fetching accounts data", error);
      }
    };

    fecthData();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Id_Crop</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crops, index) => (
            <tr key={crops.id}>
              <td>{index + 1}</td>
              <td>{crops.name}</td>
              <td>{crops.crop_type.name}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default CropPages;
