import React, { useState } from "react";

function HowToModal() {
  return (
    <div>
      <dialog id="how_to_modal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">How WordLINK works</h3>
          <p className="py-4">
            In <span className="font-bold text-lg">"WordLINK"</span>, the goal
            is to link one word to another by jumping between synonyms and
            antonyms.
          </p>
          <p className="py-4">
            At the top of the screen, you can see the challenge of the day.
            Below that, you can see the current word aswell as it's definition.
            You can see{" "}
            <span onClick={() => {}} className="btn btn-primary">
              synonyms
            </span>{" "}
            in green and <span className="btn btn-accent">antonyms</span> in
            red.
          </p>
          <p className="py-4">
            Clicking on a word will update your path, incrementing it by 1. The
            aim of the game is to get a shorter path than anyone else.
          </p>
          <p className="py-4">
            If you find it too difficult to go from the first word to the second
            word, you can click on the{" "}
            <span className="font-bold text-lg">"WordLINK"</span> at the top to
            swap them. Click on words in{" "}
            <span className="font-bold text-lg">Your LINK</span> to travel to
            them.
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

export default HowToModal;
