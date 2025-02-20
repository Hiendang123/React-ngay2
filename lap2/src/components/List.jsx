import React from "react";
import MyTam from "./list-music/my-tam";
import HoNgonHa from "./list-music/ho-ngon-ha";
import QuangHung from "./list-music/masterD";
import SonTung from "./list-music/MTP";
import DucPhuc from "./list-music/Duc-Phuc";
import Justin from "./list-music/Justin";

function List() {
 const arr = [
  {
    "src": "/public/my-tam.jpg",
    "title": "My Tam",
  },
  {}
 ]

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-nowrap space-x-10 equal-width">
        {/* <MyTam />
        <HoNgonHa />
        <QuangHung />
        <SonTung />
        <DucPhuc /> */}
        <Artist data={A} />
      </div>
      <Justin />
    </div>
  );
}

export default List;
