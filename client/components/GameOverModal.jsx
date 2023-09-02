import React, { useState } from "react";

function GameOverModal(props) {
  const { path, challengeData } = props;
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <dialog id="game_over_modal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Let's goooo</h3>
          <p className="py-4">
            Nice, you completed it in {path.length - 1} links.
          </p>
          <p className="py-4">
            {path.length - 1 >= challengeData.record
              ? `The best score found was 
            ${Math.min(challengeData.record, path.length - 1)}`
              : "Congratulations! You found the new best path!"}
          </p>
          <p className="py-4">
            Share your victory:{" "}
            {!copied ? (
              <a
                className="link link-primary"
                onClick={() => {
                  navigator.clipboard.writeText(path.join(" "));
                  setCopied(true);
                }}
              >
                click-to-copy
              </a>
            ) : (
              <span className="py-4 text-primary">Copied to clipboard!</span>
            )}
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default GameOverModal;
