# MFTA-Car

This project is used in the MFTA Showcase to control a micro:bit robot car designed for kids.

---

## 📂 File Breakdown

* 🕹️ **`remote.js`**: The code for the controller/remote micro:bit.
* 🚗 **`car.js`**: The code for the receiver/robot car micro:bit.

---

## 💻 How to Load the Code into MakeCode

Since the code is provided in JavaScript format, follow these quick steps to convert them back into visual Code Blocks:

1. Open [Microsoft MakeCode for micro:bit](https://makecode.microbit.org/).
2. Click on **New Project**.
3. At the very top of the editor screen, switch the toggle from **Blocks** to **JavaScript**.
4. Clear out any default code in the editor, then **copy and paste** the contents of `remote.js` or `car.js` into the window.
5. Click the toggle at the top back to **Blocks**. MakeCode will automatically translate the JavaScript into visual code blocks!

---

## ⚠️ Important Configuration Note

If you are running **multiple cars and remotes** in the same room, you must change the **Radio Group** in the code to avoid interference. 

Ensure each car and its corresponding remote are paired using the exact same radio group number:
* *Example:* Remote 1 and Car 1 = Group `1`
* *Example:* Remote 2 and Car 2 = Group `2`

---

## 🛠️ Hardware Wiring Pinout

| L298N Pins | Connected To | Purpose / Function |
| :--- | :--- | :--- |
| **[ POWER ]** | | |
| **12V Block** | **External Battery (+)** | High-power source for driving the motors |
| **GND Block** | **External Battery (-)** | Power return line |
| **GND Block** | **Micro:bit GND** | Common Ground Link (Connects alongside Battery -) |
| | | |
| **[ OUTPUT MOTORS ]** | | |
| **OUT1** | **Left Motor (+)** | Positive terminal for Left Motor |
| **OUT2** | **Left Motor (-)** | Negative terminal for Left Motor |
| **OUT3** | **Right Motor (+)** | Positive terminal for Right Motor |
| **OUT4** | **Right Motor (-)** | Negative terminal for Right Motor |
| | | |
| **[ INPUT MICRO:BIT ]** | | |
| **IN1** | **Micro:bit P13** | Left Motor Direction Control (Forward) |
| **IN2** | **Micro:bit P14** | Left Motor Direction Control (Reverse) |
| **IN3** | **Micro:bit P15** | Right Motor Direction Control (Forward) |
| **IN4** | **Micro:bit P16** | Right Motor Direction Control (Reverse) |

> 💡 **Troubleshooting Tip:** If a motor spins backward during testing, simply swap its individual `+` and `-` wires where they screw into the L298N `OUT` terminal blocks.
