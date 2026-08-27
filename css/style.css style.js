 <style>
    

    header {
      background: linear-gradient(90deg, #000, #444);
      color: silver;
      padding: 20px;
      text-align: center;
      border-bottom: 3px solid #888;
    }

    header h1 {
      font-size: 2.5rem;
      letter-spacing: 2px;
      margin: 0;
    }

    nav ul {
      list-style: none;
      padding: 0;
      margin: 15px 0 0;
      display: flex;
      justify-content: center;
      gap: 30px;
    }

    nav a {
      text-decoration: none;
      color: #eee;
      font-weight: bold;
      transition: color 0.3s;
    }

    nav a:hover {
      color: silver;
    }

    main {
      padding: 40px;
      max-width: 1200px;
      margin: auto;
    }

    section {
      margin-bottom: 60px;
    }

    h2 {
      border-bottom: 2px solid silver;
      padding-bottom: 10px;
      margin-bottom: 20px;
      color: #ccc;
    }

    .division {
      background: #222;
      padding: 20px;
      margin: 15px 0;
      border-left: 5px solid silver;
      transition: transform 0.3s;
    }

    .division:hover {
      transform: translateX(10px);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      background: #222;
      padding: 20px;
      border-radius: 8px;
    }

    input, textarea, select, button {
      padding: 10px;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
    }

    input, textarea, select {
      background: #333;
      color: #eee;
    }

    button {
      background: silver;
      color: #111;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background: #7b7979;
    }

    footer {
      background: #000;
      color: #8d8888;
      text-align: center;
      padding: 20px;
      border-top: 3px solid #444;
    }
  
/* Gradient animation */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}



@keyframes drift {
  from { transform: translateY(0); }
  to { transform: translateY(-100px); }
}

/* Division cards with glass effect */
.division {
  background: rgba(34, 34, 34, 0.8); /* semi-transparent overlay */
  backdrop-filter: blur(6px);        /* glass blur effect */
  padding: 20px;
  margin: 30px 0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
  transition: transform 0.3s, box-shadow 0.3s;
}

.division:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(26, 26, 26, 0.7);
}

.division img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}
/* Animated gradient background */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  color: #ada9a9;
  background: linear-gradient(-45deg, #000, #333, #555, rgb(141, 136, 136));
  background-size: 400% 400%;
  animation: gradientMove 15s ease infinite;
  position: relative;
  overflow-x: hidden; /* prevent horizontal scroll */
}

/* Gradient animation */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Big slow bubbles */
body::before {
  content: "";
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: radial-gradient(rgba(192,192,192,0.6) 8px, transparent 8px);
  background-size: 120px 120px;
  animation: bubbleDrift 30s linear infinite, twinkle 8s ease-in-out infinite alternate;
  opacity: 0.25;
  z-index: -1;
  pointer-events: none;
}

/* Small fast bubbles */
body::after {
  content: "";
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: radial-gradient(rgba(192,192,192,0.4) 4px, transparent 4px);
  background-size: 70px 70px;
  animation: bubbleDriftFast 18s linear infinite, twinkle 5s ease-in-out infinite alternate;
  opacity: 0.2;
  z-index: -1;
  pointer-events: none;
}

/* Bubble drift animations */
@keyframes bubbleDrift {
  from { transform: translate(0,0); }
  to { transform: translate(-200px,-200px); }
}

@keyframes bubbleDriftFast {
  from { transform: translate(0,0); }
  to { transform: translate(200px,-200px); }
}

/* Twinkle shimmer */
@keyframes twinkle {
  from { opacity: 0.15; }
  to { opacity: 0.35; }
}
body::before,
body::after {
  filter: brightness(1.3) contrast(1.2);
}

/* Side Button */
.side-button {
  position: absolute;
  right: -120px; /* sits on the side */
  top: 50px;
  transform: rotate(-90deg);
  background: silver;
  color: #111;
  padding: 10px 20px;
  border: none;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.side-button:hover {
  background: #888;
}
/* Side Button */
.side-button {
  position: absolute;
  right: -120px; /* sits on the side */
  top: 50px;
  transform: rotate(-90deg);
  background: silver;
  color: #111;
  padding: 10px 20px;
  border: none;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.side-button:hover {
  background: #888;
}

/* Mission Statement Box */
.mission-box {
  display: none;
  margin-top: 20px;
  background: rgba(34,34,34,0.85);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
}
#about {
  position: relative; /* allows the side button to anchor correctly */
}





  </style>
  
<style>
 .more-info {
  max-height: 0;
  overflow: hidden;
  background: #333;
  padding: 0 15px;
  border-radius: 8px;
  transition: max-height 0.5s ease-out, padding 0.3s ease-out;
}

.more-info.show {
  max-height: 500px; /* enough space for content */
  padding: 15px;
}



.division {
  background: #222;
  padding: 20px;
  margin: 30px 0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
  transition: transform 0.3s, box-shadow 0.3s;
}
.division:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.7);
}
.division img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;

</style>
