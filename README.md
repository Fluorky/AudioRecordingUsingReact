# Audio Recorder Project
This project is short PoC a web application that allows users to record audio and upload it to a server. The frontend is built with React, and the backend is built with Flask.

git clone https://github.com/yourusername/AudioRecorderProject.git
cd AudioRecorderProject

# Setup the backend
cd MockAPI
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
python -m app.py or python3 app.py (if you use linux/MacOS)

Setup the frontend:
install react in this folrer using `npm install`
go to audio-recorder foldee
`npm install react-mic`
use command `npm start` to start frontend
