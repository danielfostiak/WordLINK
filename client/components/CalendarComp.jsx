import Calendar from "react-calendar";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

function CalendarComp({ today }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div>
      <dialog id="calendar_modal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Play past games</h3>
          <p className="py-4">
            Done <span className="font-bold text-lg">Today's Challenge</span> ?
            Or maybe you missed a day of{" "}
            <span className="font-bold text-lg">"WordLINK"</span> ? Maybe you
            just want to play a bit more... Click a day on the calendar to play
            that day's game.
          </p>
          <div className="mx-auto">
            {loading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <Calendar
                className="mx-auto m-4"
                // minDate={new Date("2023-08-31")}
                minDetail="month"
                onClickDay={(day) => {
                  console.log(day.toLocaleDateString("sv").split("T")[0]);
                  const newDate = day.toLocaleDateString("sv").split("T")[0];
                  if (newDate == pathname.slice(1)) {
                    window.calendar_modal.close();
                    return;
                  }
                  setLoading(true);
                  router.push(`/${newDate}`);
                }}
              />
            )}
          </div>

          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default CalendarComp;
