import { useState } from "react";

function ToggleButton() {
    const [isON, setIsON] = useState(false);

    const toggle = () => {
        setIsON(!isON);
    }

    return (
        <>
            <div style={{ marginTop: "40px" }}>
                <button
                    onClick={toggle}
                    style={{
                        backgroundColor: isON ? "green" : "gray",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "8px",
                    }}
                >
                    {isON ? "ON" : "OFF"}
                </button>
                      <p>Status: {isON ? "Active" : " Inactive"}</p>

            </div>
        </>
    );
}

export default ToggleButton;

