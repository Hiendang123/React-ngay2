// import React from "react";

// function QuangHung() {
//   return (
//     <div>
//       <div class="flex items-center justify-between p-4 bg-white shadow rounded-lg">
//         <div class="flex items-center">
//           <img
//             src="/public/masterD.jpg"
//             alt="Image of Quang Hung MasterD"
//             class="w-12 h-12 rounded-full mr-4"
//           />
//           <div>
//             <p class="font-semibold text-red">Quang Hung MasterD</p>
//             <p class="text-gray-500 text-large">Music</p>
//           </div>
//         </div>
//         <div class="flex items-center space-x-4">
//           <span class="text-gray-500">03</span>
//           <i class="far fa-heart text-gray-500"></i>
//           <i class="fas fa-play text-gray-500"></i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuangHung;

import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const QuangHung = () => (
  <Card
    hoverable
    style={{
      width: 240,
      height: 300,
    }}
    cover={
      <img
        style={{ width: 240, height: 150 }}
        alt="example"
        src="../../public/masterD.jpg"
      />
    }
  >
    <Meta
      title="V-Pop Tuổi Vui"
      description="Bật tình yêu lên và giai điệu V-Pop làm bạn vui tươi cả ngày"
    />
  </Card>
);
export default QuangHung;
