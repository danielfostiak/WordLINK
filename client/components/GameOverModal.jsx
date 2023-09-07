import React, { useState } from "react";
import BarChart from "./BarChart";

function GameOverModal({ path, scores }) {
  const [copied, setCopied] = useState(false);
  const bestScore = Math.min(...scores.map((obj) => obj.pathlength));

  return (
    <div>
      <dialog id="game_over_modal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations, you completed today's challenge!
          </h3>

          <p className="py-4">
            Nice, you completed it in{" "}
            <span className="font-bold text-lg">{path.length - 1} links</span> .
          </p>
          <p className="py-4">
            {path.length - 1 > bestScore
              ? `The best score found was 
            ${bestScore}`
              : "Congratulations! You found the best path!"}
          </p>
          <BarChart scores={scores.map((obj) => obj.pathlength)} />
          <p className="py-4">
            Share your victory:{" "}
            {!copied ? (
              <a
                className="link link-primary"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `I won WordLink in ${
                      path.length - 1
                    } links. Beat my score at https://wordlink.xyz.`
                  );
                  setCopied(true);
                }}
              >
                click-to-copy
              </a>
            ) : (
              <span className="py-4 text-primary">Copied to clipboard!</span>
            )}
          </p>
          <p className="py-4">
            You can play again to improve your score tomorrow.
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
