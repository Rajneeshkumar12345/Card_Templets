import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Card() {
  return (
    <>
      <div className="Card">
        <div className="Card_App1">
          <h6>
            <AccountCircleOutlinedIcon fontSize="large" />
            <br></br>
          </h6>
          <h1>John Doe</h1>
          <h6>@bret</h6>

          <div className="Card_app2">
            <p>
              <LocalPhoneOutlinedIcon fontSize="small" />
              +919876543210
            </p>
            <p>
              <DraftsOutlinedIcon fontSize="small" />
              john@doe.com
            </p>
            <p>
              <CorporateFareOutlinedIcon fontSize="small" />
              Tesla Corp
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
