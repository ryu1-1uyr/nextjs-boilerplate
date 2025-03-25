"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/public/konoka2.jpg";

const ThreeDimensionalRoom = () => {
  return (
    <div
      style={{
        perspective: "800px", // 遠近感を設定
        height: "90vh",
        width: "90%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#222", // 背景色
      }}
    >
      <motion.div
        style={{
          width: "400px",
          height: "300px",
          backgroundColor: "#333", // 壁の色
          transform: "translateZ(100px)", // 奥に配置
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // 影
          cursor: "pointer",
        }}
        animate={{ rotateY: 20 }} // 少し回転
        transition={{ duration: 2 }}
      >
        <div style={{ padding: "20px", color: "#eee" }}>
          {/* キャラクターなどのコンテンツ */}
          <Image src={image.src} fill style={{ objectFit: "cover" }} alt={""} />
        </div>
      </motion.div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginLeft: "50px", // 右側のコンテンツ
        }}
      >
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "20px",
            backgroundColor: "#444",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          About
        </a>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "20px",
            backgroundColor: "#444",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Links
        </a>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "20px",
            backgroundColor: "#444",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Blogs
        </a>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "20px",
            backgroundColor: "#444",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Gallery
        </a>
      </div>
    </div>
  );
};

export default ThreeDimensionalRoom;
