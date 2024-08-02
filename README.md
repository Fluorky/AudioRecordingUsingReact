git clone https://github.com/yourusername/AudioRecorderProject.git
cd AudioRecorderProject

#Setup the backend
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
