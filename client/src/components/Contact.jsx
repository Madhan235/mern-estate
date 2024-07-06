import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";


export default function Contact({ listing, contact,setContact }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        if (data.success === false) {
          return;
        }
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            {" "}
            Contact <span className="font-semibold">
              {landlord.username}
            </span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <div className="flex">

          <textarea
            name="message"
            id="message"
            rows={"2"}
            value={message}
            onChange={handleChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg "
            ></textarea>

       <FaXmark onClick={()=>setContact(!contact)} className="text-2xl"/>
            </div>

          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}

            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95 "
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
