# MFTA-Car

This project is used in the MFTA Showcase to control a micro:bit robot car designed for kids.

## File Breakdown

*   **`remote.js`**: The code for the controller/remote micro:bit.
*   **`car.js`**: The code for the receiver/robot car micro:bit.

---

## ⚠️ Important Configuration Note

If you are running **multiple cars and remotes** in the same room, you must change the **Radio Group** in the code to avoid interference. 

Ensure each car and its corresponding remote are paired using the exact same radio group number (e.g., Remote 1 and Car 1 = Group `1`, Remote 2 and Car 2 = Group `2`).
