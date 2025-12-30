import { useState } from "react";

export default function LikeButton({ onClick }) {
    const [liked, setLiked] = useState(false)
    return (
        <>
            <button onClick={() => {
                setLiked(!liked)
                onClick();
            }}
                style={{
                    margin: "0 auto 1%",
                    padding: "1.2%",
                    borderRadius: "20px",
                    border: "1px solid #ccc",
                    backgroundColor: liked ? "#33332E" : "#E60023",
                    color: "#f3f3f3ff",
                    fontWeight: "bold"
                }}>
                {liked ? "Đã lưu" : "Lưu"}
            </button>
        </>
    );
}