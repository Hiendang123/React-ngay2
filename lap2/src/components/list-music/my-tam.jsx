// import React from "react";

// function MyTam() {
//   return (
//     <div>
//       <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
//         <div className="flex items-center">
//           <img
//             src="/public/my-tam.jpg"
//             alt="Image of My Tam"
//             className="w-12 h-12 rounded-full mr-4"
//           />
//           <div>
//             <p className="font-semibold">
//               My Tam
//             </p>
//             <p className="text-gray-500">
//               Music
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <span className="text-gray-500">01</span>
//           <i className="far fa-heart text-gray-500"></i>
//           <i className="fas fa-play text-gray-500"></i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyTam;

// import React from "react";
// import "../../public/style.css"; // Đường dẫn tới file CSS

// function MyTam() {
//   return (
//     <div>
//       <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
//         <div className="flex items-center">
//           <img
//             src="/public/my-tam.jpg"
//             alt="Image of My Tam"
//             className="w-12 h-12 rounded-full mr-4"
//           />
//           <div>
//             <p className="font-semibold text-red"> {/* Thêm class text-red */}
//               My Tam
//             </p>
//             <p className="text-gray-500 text-large"> {/* Thêm class text-large */}
//               Music
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <span className="text-gray-500">01</span>
//           <i className="far fa-heart text-gray-500"></i>
//           <i className="fas fa-play text-gray-500"></i>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const MyTam = () => (
  <Card
    hoverable
    style={{
      width: 290,
      height: 300,
    }}
    cover={
      <img
        alt="example"
        src="../../public/my-tam.jpg"
        // Đường dẫn tới file ảnh
      />
    }
  >
    <Meta
      title="Ngày Hạnh Phúc"
      description="Hạnh phúc trong tình yêu là được bên nhau mỗi ngày"
    />
  </Card>
);

export default MyTam;
