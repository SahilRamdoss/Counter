import "./App.css";
import { useEffect, useState } from "react";

export default function App() {

  const INITIAL_COUNT = 187;

  const [counting, setCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
    const storedCount = localStorage.getItem("counting");
    const storedDate = localStorage.getItem("lastUpdated");

    let currentCount = storedCount ? parseInt(storedCount, 10) : INITIAL_COUNT;

    if (storedDate !== today) {
      // New day: increment
      currentCount += 1;
      localStorage.setItem("counting", currentCount);
      localStorage.setItem("lastUpdated", today);
    }

    setCount(currentCount);
  }, []);

  const wrapper = {
    color: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position:"relative",
  };

  const container = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    zIndex: "100",
    width: "100%",
    zIndex: "100",
    padding: "0px 5% 0px 5%",
  };

  const ImageContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }

  const imageCss = {
    width: "25%",
    minWidth: "200px",
    height: "auto",
    border: "solid 1px transparent",
    borderRadius: "10px",
    marginBottom: "50px",
  };

  const header = {
    textAlign: "center",
    fontSize: "25px",
    width: "100%",
    maxWidth: "400px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
  };

  const counter = {
    fontSize: "80px",
    fontWeight: "bold",
    maxWidth: "400px",
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    borderTop: "solid 2px white",
    borderBottom: "solid 2px white",
  };

  const animation = {
    position: "absolute",
    top: "0",
    marginBottom: "5px",
  };
  const count = {
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const wanted = {
    fontWeight: "bold",
    fontFamily: "Georgia",
    letterSpacing: "2px",
    textTransform: "uppercase",
  }

  return (
    <>
      <div style={wrapper}>
        <div style={container}>
          <h1 style={wanted}>WANTED</h1>
          <div id="ImageContainer" style={ImageContainer}>
            <img src="../public/Zaki.jpg" style={imageCss} />
          </div>

          <div style={header}>
            Days since Zaki promised me a samboka!
          </div>

          <div style={counter}>
            <div style = {count}>
              <div class="hourglassBackground">
                <div class="hourglassContainer">
                  <div class="hourglassCurves"></div>
                  <div class="hourglassCapTop"></div>
                  <div class="hourglassGlassTop"></div>
                  <div class="hourglassSand"></div>
                  <div class="hourglassSandStream"></div>
                  <div class="hourglassCapBottom"></div>
                  <div class="hourglassGlass"></div>
                </div>
              </div>
            </div>
            <div style={count}>
            {counting}
            </div>
            <div style={count}>
              <div class="hourglassBackground">
                <div class="hourglassContainer">
                  <div class="hourglassCurves"></div>
                  <div class="hourglassCapTop"></div>
                  <div class="hourglassGlassTop"></div>
                  <div class="hourglassSand"></div>
                  <div class="hourglassSandStream"></div>
                  <div class="hourglassCapBottom"></div>
                  <div class="hourglassGlass"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div style={animation}>
          <style>{`
          /* Custom Hourglass Animation - 60px, Dark Purple */

.hourglassBackground {
  position: relative;
  background-color: #301934; /* Dark purple */
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin: 30px auto;
}

.hourglassContainer {
  position: absolute;
  top: 9px;
  left: 15px;
  width: 30px;
  height: 36px;
  animation: hourglassRotate 2s ease-in 0s infinite;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.hourglassContainer div,
.hourglassContainer div:before,
.hourglassContainer div:after {
  transform-style: preserve-3d;
}

@keyframes hourglassRotate {
  0%, 100% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(180deg);
  }
}

.hourglassGlassTop {
  transform: rotateX(90deg);
  position: absolute;
  top: -7px;
  left: 2px;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  background-color: #999999;
}

.hourglassGlass {
  perspective: 100px;
  position: absolute;
  top: 17px;
  left: 12px;
  width: 6px;
  height: 4px;
  background-color: #999999;
  opacity: 0.5;
}

.hourglassGlass:before,
.hourglassGlass:after {
  content: '';
  display: block;
  position: absolute;
  background-color: #999999;
  left: -10px;
  width: 26px;
  height: 15px;
}

.hourglassGlass:before {
  top: -14px;
  border-radius: 0 0 15px 15px;
}

.hourglassGlass:after {
  bottom: -14px;
  border-radius: 15px 15px 0 0;
}

.hourglassCurves:before,
.hourglassCurves:after {
  content: '';
  display: block;
  position: absolute;
  top: 18px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #333;
  animation: hideCurves 2s ease-in 0s infinite;
}

.hourglassCurves:before {
  left: 8px;
}

.hourglassCurves:after {
  left: 18px;
}

@keyframes hideCurves {
  0%, 40%, 100% {
    opacity: 1;
  }
  25%, 30% {
    opacity: 0;
  }
}

.hourglassSandStream:before {
  content: '';
  display: block;
  position: absolute;
  left: 14px;
  width: 2px;
  background-color: white;
  animation: sandStream1 2s ease-in 0s infinite;
}

.hourglassSandStream:after {
  content: '';
  display: block;
  position: absolute;
  top: 20px;
  left: 12px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
  animation: sandStream2 2s ease-in 0s infinite;
}

@keyframes sandStream1 {
  0%, 50% {
    height: 0;
    top: 19px;
  }
  60%, 85% {
    height: 18px;
    top: 5px;
  }
  100% {
    height: 0;
    top: 5px;
  }
}

@keyframes sandStream2 {
  0%, 50%, 100% {
    opacity: 0;
  }
  51%, 90% {
    opacity: 1;
  }
}

.hourglassSand:before,
.hourglassSand:after {
  content: '';
  display: block;
  position: absolute;
  left: 4px;
  background-color: white;
}

.hourglassSand:before {
  top: 5px;
  width: 22px;
  border-radius: 2px 2px 15px 15px;
  animation: sandFillup 2s ease-in 0s infinite;
}

.hourglassSand:after {
  border-radius: 15px 15px 2px 2px;
  animation: sandDeplete 2s ease-in 0s infinite;
}

@keyframes sandFillup {
  0%, 60% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: 8px;
  }
}

@keyframes sandDeplete {
  0% {
    opacity: 0;
    top: 25px;
    height: 8px;
    width: 22px;
    left: 4px;
  }
  1%, 24% {
    opacity: 1;
  }
  25%, 50% {
    top: 23px;
  }
  90% {
    height: 0;
    width: 6px;
    left: 12px;
  }
}

          `}</style>
        </div>
      </div>
    </>
  );
}
