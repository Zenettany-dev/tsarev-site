"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 z-[999] bg-[#050508] flex items-center justify-center overflow-hidden"
        >
          <div className="sit-n-spin"></div>
          <style jsx>{`
            .sit-n-spin {
              position: relative;
              width: 150px;
              height: 150px;
            }
            .sit-n-spin:before, .sit-n-spin:after {
              content: '';
              display: block;
              position: absolute;
              top: 0; left: 0;
              width: 100%; height: 100%;
              background-size: contain;
              background-repeat: no-repeat;
              background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI2NnB4IiBoZWlnaHQ9IjI5N3B4IiB2aWV3Qm94PSIwIDAgMjY2IDI5NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CjxwYXRoIGQ9Ik0xNzEuNTA3ODEzLDMuMjUwMDAwMzggQzIyNi4yMDgxODMsMTIuODU3NzExMSAyOTcuMTEyNzIyLDcxLjQ5MTI4MjMgMjUwLjg5NTU5OSwxMDguNDEwMTU1IEMyMTYuNTgyMDI0LDEzNS44MjAzMSAxODYuNTI4NDA1LDk3LjA2MjQ5NjQgMTU2LjgwMDc3NCw4NS43NzM0MzQ2IEMxMjcuMDczMTQzLDc0LjQ4NDM3MjEgNzYuODg4NDYzMiw4NC4yMTYxNDYyIDYwLjEyODkwNjUsMTA4LjQxMDE1MyBDLTE1Ljk4MDQ2ODUsMjE4LjI4MTI0NyAxNDUuMjc3MzQ0LDI5Ni42Njc5NjggMTQ1LjI3NzM0NCwyOTYuNjY3OTY4IEMxNDUuMjc3MzQ0LDI5Ni42Njc5NjggLTI1LjQ0OTIxODcsMjU3LjI0MjE5OCAzLjM5ODQzNzUsMTA4LjQxMDE1NSBDMTYuMzA3MDY2MSw0MS44MTE0MTc0IDg0LjcyNzU4MjksLTExLjk5MjI5ODUgMTcxLjUwNzgxMywzLjI1MDAwMDM4IFoiIGZpbGw9IiMyNTYzZWIiPjwvcGF0aD4KPC9nPgo8L3N2Zz4=');
            }
            .sit-n-spin:before {
              transform: rotateX(60deg) rotateY(45deg) rotateZ(45deg);
              animation: rotateBefore 1.5s infinite linear reverse;
            }
            .sit-n-spin:after {
              transform: rotateX(240deg) rotateY(45deg) rotateZ(45deg);
              animation: rotateAfter 1.5s infinite linear;
            }
            @keyframes rotateBefore {
              from { transform: rotateX(60deg) rotateY(45deg) rotateZ(0deg); }
              to { transform: rotateX(60deg) rotateY(45deg) rotateZ(-360deg); }
            }
            @keyframes rotateAfter {
              from { transform: rotateX(240deg) rotateY(45deg) rotateZ(0deg); }
              to { transform: rotateX(240deg) rotateY(45deg) rotateZ(360deg); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}