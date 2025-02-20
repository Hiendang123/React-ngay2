// import React from "react";

// function Justin() {
//   return (
//     <div>
//       <div class="flex items-center justify-between p-4 bg-white shadow rounded-lg">
//         <div class="flex items-center">
//           <img
//             src="/public/justin.jpg"
//             alt="Image of Justin Bieber"
//             class="w-12 h-12 rounded-full mr-4"
//           />
//           <div>
//             <p class="font-semibold text-red">Justin Bieber</p>
//             <p class="text-gray-500 text-large">Music</p>
//           </div>
//         </div>
//         <div class="flex items-center space-x-4">
//           <span class="text-gray-500">06</span>
//           <i class="far fa-heart text-gray-500"></i>
//           <i class="fas fa-play text-gray-500"></i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Justin;

import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const Justin = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="../../public/justin.jpg" />}
  >
    <Meta
      title="Nhạc Trẻ...."
      description="Châu Khải Phong, Phan Duy Anh, Trường Vũ..."
    />
  </Card>
);
export default Justin;
