import React, { useState } from "react";

function ComingSoonModal() {
  return (
    <div>
      <dialog id="coming_soon_modal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">This feature is coming soon...</h3>
          <p className="py-4">
            <span className="font-bold text-lg">"WordLINK"</span> is still
            currently being developed and features are being added everyday. I
            am working hard to try and get these implemented ASAP.
          </p>

          <p className="py-4">Hope you enjoy!</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default ComingSoonModal;
