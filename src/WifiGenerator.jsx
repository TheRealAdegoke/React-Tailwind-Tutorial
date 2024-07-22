import React, { useState } from "react";

const WifiGenerator = () => {
    const [ssid, setSsid] = useState("")
    const [password, setPassword] = useState("");
    const [qrCodeurl, setQrCodeurl] = useState(
      "https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=todo"
    );

    const updateQrCode = () => {
        const wifiData = `WIFI:T:WPA;S:${ssid};P:${password};;`;
        setQrCodeurl(
          `https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=${wifiData}`
        );
    }

    const handlePrint = () => {
        window.print()
    }

  return (
    <>
      <form
        action=""
        className="py-1 px-2 max-w-[300px] mx-auto my-5 flex flex-col"
      >
        <h1 className="text-2xl my-4">WiFi Login</h1>
        <div className="flex flex-col gap-1">
          <img src={qrCodeurl} alt="" width="164" />

          <div className="flex flex-col justify-center gap-5 mb-4">
            <label htmlFor="" className="flex flex-col">
              Network className
              <input
                type="text"
                placeholder="WiFi network name"
                className="h-[38px] px-4 border-[1px] border-[#d1d5db] rounded text-black"
                value={ssid}
                onChange={(e) => {
                  setSsid(e.target.value);
                  updateQrCode();
                }}
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Password
              <input
                type="text"
                placeholder="WiFi network name"
                className="h-[38px] px-4 border-[1px] border-[#d1d5db] rounded text-black"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  updateQrCode();
                }}
              />
            </label>
          </div>
        </div>

        <p className="mb-6">
          📸 Point your phone's camera at the QR code to connect to WiFi
        </p>

        <button className="h-[2.5rem] bg-[#0ea5e9] rounded px-2" onClick={handlePrint}>Print</button>
      </form>
    </>
  );
};

export default WifiGenerator;
