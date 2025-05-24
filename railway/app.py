from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/joke', methods=['GET'])
def get_joke():
    try:
        response = requests.get('https://v2.jokeapi.dev/joke/Programming?lang=es')
        data = response.json()
        if data["type"] == "single":
            joke = data["joke"]
        else:
            joke = f"{data['setup']}... {data['delivery']}"
        return jsonify({"joke": joke})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

